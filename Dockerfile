FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN npm install -g yarn
RUN yarn
COPY . .
RUN yarn build
ENTRYPOINT [ "yarn","start" ]
