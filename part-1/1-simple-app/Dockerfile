#For Node image optimization we can use alpine version of node.
FROM node:14-alpine

WORKDIR /usr/src/app

# We can do it by copying just the package files if it gets changed then we can install the new dependencies
COPY package*.json ./

RUN npm install

#After that we can copy the rest of the code
COPY . .

#This way if any dependcy is added or deleted then only we have to npm install our dependencies.


EXPOSE 3000

CMD ["node", "index.js"]
