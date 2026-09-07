FROM node:24.20.0-alpine3.23@sha256:0388af2af070cd4736a1567cfed02469ba117848845b4165d87a333edb53d2ca

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
