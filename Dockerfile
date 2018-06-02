FROM node:alpine

WORKDIR /usr/src/app

# Install app dependencies
# Only copy package.json to exploit Docker's cached layers
# http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/
# A wildcard is used to ensure both package.json AND package-lock.json
# are copied where available (npm@5+)
COPY package*.json ./
RUN npm install

COPY . .

# Expose port so it is mapped by Docker daemon
EXPOSE 8080 9229

CMD [ "npm", "start" ]
