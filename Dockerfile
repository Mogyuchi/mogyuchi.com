FROM node:16.13.1-alpine3.14

ENV PROJECT_ROOTDIR=/app/

WORKDIR $PROJECT_ROOTDIR

COPY package.json yarn.lock .yarnrc.yml $PROJECT_ROOTDIR

COPY .yarn/ $PROJECT_ROOTDIR/.yarn/

RUN yarn install

COPY . $PROJECT_ROOTDIR

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["yarn", "dev"]
