FROM mcr.microsoft.com/playwright:v1.51.1-jammy

WORKDIR /app

COPY . .

RUN npm install

CMD ["npx", "playwright", "test"]
