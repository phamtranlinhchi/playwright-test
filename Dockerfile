FROM node:23.11-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD ["npx", "playwright", "test"]
