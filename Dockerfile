FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN apt update
RUN apt-get install software-properties-common
RUN add-apt-repository ppa:jonathonf/python-3.6
RUN apt update
RUN apt install g++ python3 -y
RUN apt install python3.6 -y
RUN yarn install --inline-builds
RUN yarn build
ENTRYPOINT [ "yarn","start" ]
