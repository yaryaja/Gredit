FROM node:14.10.1-alpine
WORKDIR /frontend
COPY package.json ./
COPY package-lock.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn install --legacy-peer-deps
EXPOSE 3000
CMD ["yarn", "run", "start"]