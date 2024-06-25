# Stage 1: Build stage
FROM node:20-alpine as builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Stage 2: Production stage
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=builder /usr/src/app /usr/src/app

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["node", "index.js"]
