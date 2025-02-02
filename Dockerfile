FROM node:22-alpine3.21 AS build

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
RUN yarn workspaces focus  --production && yarn cache clean

FROM node:22-alpine3.21

COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/.next ./next
COPY --from=build /usr/src/app/node_modules ./node_modules

EXPOSE 3000

CMD ["yarn", "start"]
