FROM node:lts
RUN apt-get update && apt-get install -y --no-install-recommends \
    nginx \
 && rm -rf /var/lib/apt/lists/*
EXPOSE 80 3000 3001
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
CMD nginx -g 'daemon off;' & node your-node-app-start-file.js
