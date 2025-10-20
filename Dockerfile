FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --productionCOPY . .
EXPOSE 8080
CMD ["node", "app.js"]