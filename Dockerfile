FROM node:22-slim

WORKDIR /usr/src/app

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
COPY .env ./
COPY .env.production ./
COPY prisma ./prisma/  

RUN apt-get update -y && apt-get install -y openssl

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
