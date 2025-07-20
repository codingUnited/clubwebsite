FROM python:3.11-slim

# Environment setup
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# System deps for npm (required by Tailwind)
RUN apt-get update && apt-get install -y npm curl && apt-get clean

# Install Python deps
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy code
COPY . .

# Install Tailwind deps (theme/ must exist)
RUN python manage.py tailwind install
RUN python manage.py tailwind build  # Builds the final CSS output
RUN python manage.py collectstatic --noinput  # Prepares static files for production

# Clean up unnecessary files
RUN apt-get clean && rm -rf /var/lib/apt/lists/*