FROM node:20-alpine

WORKDIR /usr/src/app
# 1️⃣ Copy only package.json so npm install can be cached
COPY package*.json ./

# 2️⃣ Install dependencies
RUN npm install
# 3️⃣ Copy the rest of the application code
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]



