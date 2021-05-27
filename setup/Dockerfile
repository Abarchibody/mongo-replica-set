FROM mongo

# Create app directory
WORKDIR /usr/src/configs

# Install app dependancies
COPY replicaSet.js .
COPY setup.sh .

CMD [ "./setup.sh" ]