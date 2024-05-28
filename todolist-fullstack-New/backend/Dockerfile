FROM node:20

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

RUN npm run build

RUN npx prisma generate

EXPOSE 8080

CMD ["node","dist/index.js"]
