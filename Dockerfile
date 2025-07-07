# --- Builder Stage ---
FROM python:3.13-slim as builder

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install OS dependencies for Python packages and Node.js
RUN apt-get update && apt-get install -y --no-install-recommends curl gnupg build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js 20.x and npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements.txt and install Python dependencies first
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# Copy all application code into the builder stage
COPY . .

# --- Install Tailwind dependencies ---
# Change to the directory where Tailwind dependencies are located (static_src)
WORKDIR /app/theme/static_src
RUN python manage.py tailwind install

# --- Build Tailwind CSS for production ---
# Build and minify the Tailwind CSS using Django's tailwind management command
RUN python manage.py tailwind build

# --- Collect Static Files ---
# Now that Tailwind CSS has been built, collect static files into the STATIC_ROOT directory
WORKDIR /app
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
CMD ["python", "-m", "gunicorn", "--bind", "0.0.0.0:8000", "clubwebsite.wsgi:application", "--workers", "3", "--log-file", "-"]
