FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN apt install g++ build-essential python3 -y
RUN yarn install --inline-builds
RUN yarn build
ENTRYPOINT [ "yarn","start" ]
