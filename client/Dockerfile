# Dockerfile for React client

# Build react client
FROM node:20.9-alpine

# Working directory be app
WORKDIR /app

COPY package*.json ./

###  Installing dependencies
RUN npm install --silent

# copy local files to app folder
COPY . .

# Exposing the Port used
EXPOSE 5173

CMD ["npm","run","dev","--","--host"]