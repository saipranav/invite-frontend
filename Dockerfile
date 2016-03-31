# Base OS 
FROM saipranav/node:4.3.1

# Running prerequisite, will remove for production
RUN apt-get update && apt-get install -y --force-yes build-essential libicu-dev lsb-release

# Environment variable which can be changed with -e in docker run command
ENV NODE_ENV development

# Create a app folder in container
RUN mkdir -p /usr/src/app

# Work directory
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Install app dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Command to run post installation scripts
RUN ./run.sh

# Command to run after building container
CMD ["npm", "start"]
