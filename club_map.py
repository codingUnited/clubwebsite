# %%
import sys
sys.path.append("/home/codespace/.local/lib/python3.12/site-packages")
import pandas as pd
from sqlalchemy import create_engine, MetaData, Table, func, select
import plotly.graph_objects as go


# %%
# Connect to PostgreSQL database
engine = create_engine("postgresql+psycopg://clubuser:clubpass@localhost:5432/clubdb")  # Update credentials

# Reflect the database schema
metadata = MetaData()
metadata.reflect(bind=engine)

# %%

# Access the correct table
zipcode_table = metadata.tables["core_memberzipcode"]

# Build the query
query = select(
    zipcode_table.c.zipcode,
    func.count().label("member_count")
).group_by(zipcode_table.c.zipcode)

# Execute and load into DataFrame
with engine.connect() as conn:
    result = conn.execute(query)
    df = pd.DataFrame(result.fetchall(), columns=result.keys())

print(df)  # Confirm data is loading

# %%
# Load ZIP code to state mapping
df_zip = pd.read_csv(
    "https://public.opendatasoft.com/explore/dataset/georef-united-states-of-america-zc-point/download/?format=csv",
    sep=';',
    on_bad_lines='skip',
    engine='python'
)
print(df_zip.columns.tolist())

# %%
#merge the dataframes on the ZIP code
df_map = pd.merge(df, df_zip, left_on="zipcode", right_on="zip_code", how="left")

# %%
# Check if member data is available
if df.empty:
    print("No member data available yet. Waiting for real-time updates...")
else:
    # Format hover text
    df_map["text"] = "Zip: " + df_map["zipcode"] + "<br>Members: " + df_map["member_count"].astype(str)

    # Extract coordinates
    df_map["lat"] = df_map["geo_point_2d"].apply(lambda x: float(x.split(",")[0]) if pd.notnull(x) else None)
    df_map["lon"] = df_map["geo_point_2d"].apply(lambda x: float(x.split(",")[1]) if pd.notnull(x) else None)

    # Drop rows with missing data
    df_map = df_map.dropna(subset=["lat", "lon", "member_count"])

    # Create the map
    fig = go.Figure(go.Scattergeo(
        locationmode='USA-states',
        lon=df_map["lon"],
        lat=df_map["lat"],
        text=df_map["text"],
        marker=dict(
            size=df_map["member_count"],
            color="royalblue",
            line_color="black",
            line_width=0.5,
            sizemode="area"
        )
    ))

    # Add timestamp to title
    from datetime import datetime
    timestamp = datetime.now().strftime("%B %d, %Y %I:%M %p")

    fig.update_layout(
        title_text=f"Club Members by ZIP Code<br><sub>Last updated: {timestamp}</sub>",
        geo=dict(scope="usa", landcolor="rgb(217, 217, 217)"),
        showlegend=False
    )

    # Show the map
    fig.show()

    # Export to HTML for Django



