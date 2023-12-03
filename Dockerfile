FROM node:18.12.1-alpine3.15

ENV PROJECT_ROOTDIR=/home/node/app/

USER node

RUN mkdir -p $PROJECT_ROOTDIR
WORKDIR $PROJECT_ROOTDIR

COPY --chown=node:node package.json pnpm-lock.yaml $PROJECT_ROOTDIR

RUN pnpm i

COPY --chown=node:node . $PROJECT_ROOTDIR

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["pnpm", "dev"]
