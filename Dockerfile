FROM node:12-alpine as builder
WORKDIR /app

COPY package.json yarn.lock .yarnrc .npmrc /app/
COPY .yarn /app/.yarn
COPY packages /app/packages

RUN yarn

COPY . .

RUN yarn build

FROM nginx:mainline

COPY --from=builder /app/packages/web/public /usr/share/nginx/html
