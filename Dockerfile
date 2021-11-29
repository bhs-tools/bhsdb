FROM nikolaik/python-nodejs
WORKDIR /usr/src/app
COPY .yarn .yarn/
ADD package.json
ADD yarn.lock
RUN yarn install --inline-builds
COPY . .
RUN yarn build
ENTRYPOINT [ "yarn","start" ]
