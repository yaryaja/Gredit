FROM node:14.10.1-alpine
WORKDIR /backend
COPY package.json ./
# COPY package-lock.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn install
EXPOSE 8000
CMD ["yarn", "run", "start"]