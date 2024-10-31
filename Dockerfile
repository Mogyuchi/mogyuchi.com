FROM node:18.12.1-alpine3.15@sha256:cd3a7004267e419477bbfc50e0502df8607a0b9b4465092f6e2c2ce4092faa45

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
