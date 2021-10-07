FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN apt install g++ -y
RUN yarn install --verbose
RUN yarn build
ENTRYPOINT [ "yarn","start" ]
