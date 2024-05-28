# Base on offical Node.js Alpine image
FROM node:alpine
# Set working directory
WORKDIR /app
# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./
# Install dependencies
RUN npm install
# Copy all files
COPY ./ /app
# Cleanup previous builds
RUN rm -rf .next
# Build app
RUN npx next build
# Expose the listening port
EXPOSE 80 80
# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node
# Run npm start script when container starts
CMD [ "npx", "next", "dev" ]