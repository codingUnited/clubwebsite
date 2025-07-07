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

# --- Run Tailwind Install ---
RUN python manage.py tailwind install

# --- Build Tailwind CSS ---
RUN python manage.py tailwind build  # Build Tailwind CSS

# --- Collect Static Files ---
RUN python manage.py collectstatic --no-input  # Collect static files

# --- Runner Stage ---
FROM python:3.13-slim as runner

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Copy Python virtual environment (site-packages) from the builder stage
COPY --from=builder /usr/local/lib/python3.13/site-packages /usr/local/lib/python3.13/site-packages

# Copy the entire /app directory from the builder stage
COPY --from=builder /app /app

# Expose the port Gunicorn will listen on internally
EXPOSE 8000

# Command to run Gunicorn for production
CMD ["gunicorn", "clubwebsite.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3"]
