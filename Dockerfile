FROM node:18-alpine
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm ci --only=production

# Copy source
COPY . .

EXPOSE 8080
CMD ["node", "app.js"]