FROM node:18-alpine
# set the working directory in the container
WORKDIR /build
# copy package.json and package-lock.json to the container
COPY package*.json ./
# Install dependencies
RUN npm ci
# copy the entire application to the container
COPY . .
# build application
RUN npm run build

# expose the port that the application will run on 
EXPOSE 3000






