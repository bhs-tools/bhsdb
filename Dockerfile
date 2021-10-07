FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN apt update
RUN apt install software-properties-common -y
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt update
RUN apt install python3.6 -y
RUN yarn install --inline-builds
RUN yarn build
ENTRYPOINT [ "yarn","start" ]
