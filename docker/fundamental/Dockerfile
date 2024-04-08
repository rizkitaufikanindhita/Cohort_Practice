FROM node:20

WORKDIR /src/app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "node","dist/index.js" ]