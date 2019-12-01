#!/bin/bash
set -e

mongo -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --authenticationDatabase "admin" << EOF

use $MONGO_INITDB_DATABASE

rsconf = {
   _id: "crs",
   members: [
      {
         _id: 0,
         host: "chimeradb-primary:27017"
      },
      {
         _id: 1,
         host: "chimeradb-ares:27017"
      },
      {
        _id: 2,
        host: "chimeradb-boreas:27017"
      }
   ]
};

rs.initiate(rsconf);

EOF
