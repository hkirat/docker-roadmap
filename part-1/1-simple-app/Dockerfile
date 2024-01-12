FROM alpine

RUN apk add --update nodejs=~20.10
RUN apk add --update npm=~10.2

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]