FROM node:latest

ADD . /app

RUN cd /app; \
    npm install

EXPOSE 3000

CMD ["node", "/app/main.js"]
