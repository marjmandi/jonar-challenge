FROM node:18

COPY package*.json ./
RUN npm ci --only=production
RUN npx sequelize-cli db:migrate
RUN npx sequelize-cli db:seed:all

COPY . .

EXPOSE 8080

CMD [ "node", "main.js" ]