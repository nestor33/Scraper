FROM node:16.18.0

WORKDIR /scraper-frontend

COPY package*.json ./
RUN npm cache clean --force
RUN npm install
COPY . .

# EXPOSE 3001

# CMD npm start
# CMD [ "npm","run","start:dev" ]