FROM node:16-alpine

RUN npm install -g http-server

COPY public /public

WORKDIR /public

EXPOSE 4200

CMD ["http-server", "-p", "4200"]

