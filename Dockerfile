FROM node:22.13.0-alpine

WORKDIR /usr/app

RUN mkdir -p /usr/app/.next/cache && \
  chown -R node:node /usr/app/.next/cache

RUN npm install --global pm2

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

USER node

CMD ["pm2-runtime", "npm", "--", "start"]
