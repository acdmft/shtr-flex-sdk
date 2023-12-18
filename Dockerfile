FROM node:18-alpine AS builder
# set the working directory in the container
WORKDIR /app
# copy package.json and package-lock.json to the container
COPY package*.json ./
# Install dependencies
RUN npm ci
# copy the entire application to the container
COPY . .
# build application
RUN npm run build


FROM nginx:1.15.12-alpine
# set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# remove default nginx static assets
RUN rm -rf ./*
# copy static assets from builder stage
COPY --from=builder /app/build .
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
# expose the port that the application will run on 
EXPOSE 3000
# containers run nginx with global directives and daemon off
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]