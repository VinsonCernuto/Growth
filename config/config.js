
require('dotenv').config();

module.exports = {
  "development": {

    "username":"fy7pbbrkyw1tptn9",
    "password": "d5vaee9zjw5kvqp0",
    "database": "ut8hr2ydzksiu277",
    "host": "vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

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
