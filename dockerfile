FROM node:15.6-alpine
WORKDIR .
COPY package*.json ./
COPY . .
RUN npm install
#RUN npm run build
EXPOSE 3002

CMD [ "npm", "start" ]
