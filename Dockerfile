FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN apt update
RUN apt-get install software-properties-common -y
RUN add-apt-repository ppa:deadsnakes
RUN apt update
RUN apt install g++ python3 -y
RUN apt install python3.6 -y
RUN yarn install --inline-builds
RUN yarn build
ENTRYPOINT [ "yarn","start" ]
