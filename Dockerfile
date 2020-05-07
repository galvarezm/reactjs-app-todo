FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]

EXPOSE 8081

# construir imagen a partir de este archivo dockerfile
#docker rmi img-reactjs-app-tasks:1.0
#docker build --pull --no-cache -t img-reactjs-app-tasks:1.0 .

# construir contenedor
#docker run --rm -it -v ${PWD}:/app -e CHOKIDAR_USEPOLLING=true -p 8081:9091 --name cnt-reactjs-app-tasks img-reactjs-app-tasks:1.0

# ver logs del contenedor
#docker logs -f cnt-reactjs-app-tasks

# entrar por ssh al contenedor
#docker exec -it cnt-reactjs-app-tasks /bin/bash

#docker-compose up -d --build
#docker-compose stop