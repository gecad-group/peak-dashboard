# syntax=docker/dockerfile:1

FROM node:16-alpine

WORKDIR /app

COPY peak-dashboard/ ./

RUN npm install

CMD ["npm", "run", "serve"]

EXPOSE 8080
