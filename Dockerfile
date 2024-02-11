FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000 
#run command
CMD [ "npm", "start" ]