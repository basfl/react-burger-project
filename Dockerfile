
FROM node:7.8.0
EXPOSE 3000
COPY package.json package.json
RUN npm install
COPY . .
CMD ["npm","start"]
