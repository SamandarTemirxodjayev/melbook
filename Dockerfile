# Start from the official Nginx image
FROM nginx:latest

# Install Node.js
RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Set up the environment
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

# Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the ports Nginx is listening on
EXPOSE 80 3000 3001

# Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
