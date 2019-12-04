FROM mongo:4.2

COPY initdb/ /docker-entrypoint-initdb.d/
COPY replset.sh /etc/init.d/

RUN openssl rand -base64 756 > /home/mongod.keyfile
RUN chown mongodb:mongodb /home/mongod.keyfile
RUN chmod 400 /home/mongod.keyfile
