#Dockerfine

FROM python:3.13-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    build-essential

# Install Node.js (use LTS version)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x |bash - && \
    apt-get install -y nodejs

# Install Tailwind CLI and npm packages
COPY package.json package-lock..json* ./
RUN npm install

# Install Python dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the project
COPY . .

# Build Tailwind CSS (optional intial build before run)
RUN npx tailwindcss -i ./core/static/input.css -o ./core/static/output.css

# Run the django development server
CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]