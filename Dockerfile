FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN yarn
COPY . .
RUN yarn build

FROM nginx
EXPOSE 7000 80
USER node
CMD ["yarn", "start"]
