FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN apt install g++ -y
RUN cp dc.yml .yarnrc.yml 
RUN yarn install
RUN yarn build
ENTRYPOINT [ "yarn","start" ]
