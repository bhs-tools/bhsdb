FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN apt update
RUN apt upgrade -y
RUN yarn install --inline-builds
RUN yarn build
ENTRYPOINT [ "yarn","start" ]
