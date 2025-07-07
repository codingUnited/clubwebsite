# --- Builder Stage ---
# This stage builds your application and all static assets
FROM python:3.13-slim as builder

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install OS dependencies for Python packages and Node.js
# Use --no-install-recommends to keep image size down
RUN apt-get update && apt-get install -y --no-install-recommends curl gnupg build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js 20.x and npm
# This script adds NodeSource's APT repository, then installs nodejs
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements.txt and install Python dependencies first
# This allows Docker to cache this layer if requirements.txt doesn't change
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# Copy all application code into the builder stage
# This makes /app/theme/static_src accessible
COPY . .

# --- Build Tailwind CSS for production and collect Django static files ---
# Change to the static_src directory where package.json lives
WORKDIR /app/theme/static_src
# Install npm dependencies (node_modules for tailwindcss CLI)
RUN npm install
# Build Tailwind CSS for production
# This command compiles and minifies your CSS, outputting it to ../static/css/dist/styles.css
# Assuming 'npm run build' is defined in your package.json, e.g., "build": "tailwindcss --postcss -i ./src/styles.css -o ../static/css/dist/styles.css --minify"
RUN npm run build

# Change back to the application root directory for Django management commands
WORKDIR /app
# Collect all static files, including the newly built Tailwind CSS
# These collected files will be served by Nginx in the runner stage
RUN python manage.py collectstatic --no-input


# --- Runner Stage ---
# This stage is for the final, lean production image
FROM python:3.13-slim as runner

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Copy Python virtual environment (site-packages) from the builder stage
COPY --from=builder /usr/local/lib/python3.13/site-packages /usr/local/lib/python3.13/site-packages

# Copy the entire /app directory from the builder stage
# This includes all your application code, manage.py, and crucially,
# the /app/staticfiles_collected directory created by collectstatic
COPY --from=builder /app /app

# Expose the port Gunicorn will listen on internally
EXPOSE 8000

# Command to run the Gunicorn server for production
# Workers: '3' is a good starting point (2*CPU_cores + 1)
# --log-file -: Logs to stdout, which Docker collects
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "clubwebsite.wsgi:application", "--workers", "3", "--log-file", "-"]