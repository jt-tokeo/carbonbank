# stage 1

FROM node:alpine 
WORKDIR /app
COPY . .
RUN export NODE_OPTIONS=--openssl-legacy-provider && npm ci && npm run build --prod
RUN npm install -g pm2
RUN npm install -g serve
EXPOSE 3000
CMD ["pm2-runtime", "start", "ecosystem.config.js"]