FROM node:12
RUN apt-get update

# Install Yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Copy installation and build files
WORKDIR /home/
COPY ./package.json ./
COPY ./tsconfig* ./
COPY ./src/ ./src/

# Install packages
RUN yarn install --frozen-lockfile

# Build the application
RUN yarn build

