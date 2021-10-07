FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN apt update
RUN apt install python3.8 -y
RUN yarn install --inline-builds
RUN yarn build
ENTRYPOINT [ "yarn","start" ]
