FROM mongo:4.2

COPY initdb/ /docker-entrypoint-initdb.d/
COPY replset.sh /etc/init.d/

RUN openssl rand -base64 756 > /etc/mongo/mongod.keyfile
RUN chown mongodb:mongodb /etc/mongo/mongod.keyfile
RUN chmod 400 /etc/mongo/mongod.keyfile
