FROM node:17.3.0

LABEL version="1.0"
LABEL description="This is the base docker image."

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]