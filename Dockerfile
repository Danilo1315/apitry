FROM node:16.15.1

COPY . /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./

EXPOSE 5000
RUN npm install

CMD ["node","index.js"]