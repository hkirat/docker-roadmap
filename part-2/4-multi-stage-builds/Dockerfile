FROM node:20 AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

FROM base AS development
COPY . .
CMD ["nodemon", "index.js"]

FROM base AS production
COPY . .
RUN npm prune --production
CMD ["node", "index.js"]


