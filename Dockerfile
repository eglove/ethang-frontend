FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN yarn
COPY . .
RUN yarn build

FROM nginx
COPY --from=0 /app/.next /usr/share/nginx/html
