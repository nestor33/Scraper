FROM node:16.18.0

WORKDIR /scraper-api

COPY package*.json ./
RUN pwd & ls
RUN npm cache clean --force
RUN npm install
RUN pwd & ls & cat package.json & cd node_modules & ls
COPY . .

# EXPOSE 3001

# CMD npm start
# CMD [ "npm","run","start:dev" ]