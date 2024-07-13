FROM node:20

WORKDIR /src/app

COPY . .

RUN npm install

RUN chmod -R 755 /src/app

RUN npm run build

EXPOSE 3300

CMD [ "node","dist/index.js" ]
