FROM node:20-slim

WORKDIR /app

# Install root deps first (layer cache)
COPY package.json ./
COPY website/package.json website/package-lock.json ./website/

RUN npm install

# Copy source and build the site
COPY . .
RUN npm run build

# Cloud Run injects PORT (default 8080)
ENV PORT=8080
EXPOSE 8080

CMD ["node", "engine/src/server.js"]
