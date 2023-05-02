# syntax=docker/dockerfile:1

FROM node:16-alpine

WORKDIR /app

COPY peak-dashboard/ ./

RUN npm install --production

CMD ["npm", "run", "serve"]
