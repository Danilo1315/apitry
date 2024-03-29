FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../app/
COPY . .
EXPOSE 5000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
