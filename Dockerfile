FROM node:16.13.1-alpine3.14

ENV PROJECT_ROOTDIR=/home/node/app/

USER node

RUN mkdir -p $PROJECT_ROOTDIR
WORKDIR $PROJECT_ROOTDIR

COPY --chown=node:node package.json yarn.lock .yarnrc.yml $PROJECT_ROOTDIR
COPY --chown=node:node .yarn/ $PROJECT_ROOTDIR/.yarn/

RUN yarn install

COPY --chown=node:node . $PROJECT_ROOTDIR

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["yarn", "dev"]
