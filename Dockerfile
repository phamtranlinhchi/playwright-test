FROM node:22.14.0-bookworm

WORKDIR /app

RUN apt-get -y update && apt-get --no-install-recommends install -y libnss3 libnspr4 libdbus-1-3 libatk1.0-0 libatk-bridge2.0-0 libatspi2.0-0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libxkbcommon0 libasound2

COPY . .

RUN npm install 

CMD ["npx", "playwright", "test"]
