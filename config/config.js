
require('dotenv').config();

module.exports = {
  "development": {

    "username": "tipj50h0xl0rlbup",
    "password": "qoln8ovnfx3m50kj",
    "database": "plants",
    "host": "sh4ob67ph9l80v61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

     "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
