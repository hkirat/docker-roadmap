FROM node:20

WORKDIR /usr/src/app

COPY  package.json /usr/src/app/package.json

RUN npm install

COPY . /usr/src/app


EXPOSE 5000

CMD ["node", "index.js"]



