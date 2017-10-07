FROM node:8.6.0

ENV PORT=3000
ENV NODE_ENV=development
ENV APP_PATH=/var/www/application

# Install yarn
RUN npm install -g yarn

# Create app directory
RUN mkdir -p $APP_PATH

# Use app directory as current workdir
WORKDIR $APP_PATH

# Copy package.json and yarn.lock to workdir
COPY package.json .
COPY yarn.lock .

# Install dependencies
RUN yarn install

# Copy application code
COPY . .

# Expose Port
EXPOSE $PORT

# Run command
CMD [ "yarn", "dev" ]
