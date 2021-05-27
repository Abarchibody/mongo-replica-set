FROM mongo

# Workdir configs directory
WORKDIR /usr/src/configs

# Copy  config files
COPY mongo.config .

EXPOSE 27017

CMD [ "--config", "./mongo.config" ]