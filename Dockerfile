FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn build
ENTRYPOINT [ "yarn","start" ]
