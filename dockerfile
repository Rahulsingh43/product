# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app code
COPY . .

# Expose port
EXPOSE 9000

# Start app
CMD ["node", "index.js"]
