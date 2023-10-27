FROM node:20 as build

WORKDIR /usr/src/app

COPY  package.json index.js /usr/src/app/

RUN npm install

FROM node:alpine as main

COPY --from=build /usr/src/app /


EXPOSE 5500

CMD ["node", "index.js"]