# Meta
MAINTAINER Ivo Georgiev <ivo@strem.io>
LABEL Description="Stremio Add-ons box" Vendor="Smart Code ltd" Version="1.0.0"

# Node 4.4 on Debian Jessie
FROM node:argon

# Create app directory
RUN mkdir -p /var/www/addons-box
WORKDIR /var/www/addons-box

# Install app dependencies
COPY package.json /var/www/addons-box
RUN npm install

# Bundle app source
COPY . /var/www/addons-box

EXPOSE 3008
CMD [ "npm", "start" ]
