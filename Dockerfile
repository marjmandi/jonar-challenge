FROM node:18

COPY package*.json ./
RUN npm ci

COPY . .

RUN chmod +x /dbMigrationAndSeed.sh


EXPOSE 8080

# CMD [ "node", "server.js" ]