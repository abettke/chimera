FROM node:alpine

# Copy installation and build files
WORKDIR /home/
COPY ./package.json ./
COPY ./tsconfig* ./
COPY ./src/ ./src/

# Install packages
RUN yarn install --frozen-lockfile

# Build the application
RUN yarn build
