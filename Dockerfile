
# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:7.8.0
# The base node image sets a very verbose log level.
#ng ENV NPM_CONFIG_LOGLEVEL warn
EXPOSE 3000
COPY package.json package.json
RUN npm install
COPY . .
CMD ["npm","start"]
