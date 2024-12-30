#stage 1 

FROM node:14 as demo

WORKDIR /app

COPY . . 

RUN npm install 

#stage 2



FROM node:14-slim

WORKDIR /app

COPY --from=demo /app .

CMD [ 'node' , 'index.js' ]
