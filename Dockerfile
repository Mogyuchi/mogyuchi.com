FROM node:16.13.1-alpine3.14

ENV PROJECT_ROOTDIR=/app/

WORKDIR $PROJECT_ROOTDIR

COPY package.json package-lock.json $PROJECT_ROOTDIR

RUN npm ci

COPY . $PROJECT_ROOTDIR

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["npm", "run", "dev"]