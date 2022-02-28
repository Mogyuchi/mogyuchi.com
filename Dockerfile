FROM node:16.13.2-alpine3.15

ENV PROJECT_ROOTDIR=/home/node/app/

USER node

RUN mkdir -p $PROJECT_ROOTDIR
WORKDIR $PROJECT_ROOTDIR

COPY --chown=node:node package.json package-lock.json $PROJECT_ROOTDIR

RUN npm ci

COPY --chown=node:node . $PROJECT_ROOTDIR

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["npm", "run", "dev"]
