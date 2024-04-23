FROM node:lts
RUN apt-get update
RUN apt-get install nginx -y
EXPOSE 80/tcp
EXPOSE 3000/tcp
EXPOSE 3001/tcp
RUN npm install
RUN npm run build
RUN npm run start
CMD ["nginx", "-g", "daemon off;"]