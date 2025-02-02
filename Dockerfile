FROM node:22-alpine3.21

WORKDIR /usr/src/app

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
COPY .env ./
COPY .env.production ./
COPY prisma ./prisma/  

RUN apk add --no-cache openssl

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
