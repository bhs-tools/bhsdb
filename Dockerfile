FROM nikolaik/python-nodejs
WORKDIR /usr/src/app
COPY .yarn/ .yarn/
COPY package.json .
COPY yarn.lock .
COPY .yarnrc.yml .
RUN yarn install --inline-builds
COPY . .
RUN yarn build
ENTRYPOINT [ "yarn","start" ]
