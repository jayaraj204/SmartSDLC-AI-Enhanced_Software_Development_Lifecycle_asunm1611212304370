# Use Node.js 18
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files
COPY . .

# Expose Cloud Run port
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
