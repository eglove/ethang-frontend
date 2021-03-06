FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN yarn
COPY . .
RUN yarn build
EXPOSE 7000
USER node
CMD ["yarn", "start-prod"]
