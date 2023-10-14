FROM node:20-alpine3.17

WORKDIR /usr/src/app

COPY package* .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]


