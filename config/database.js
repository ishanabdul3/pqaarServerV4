const path = require("path");

// const sqlite = {
//   client: "sqlite",
//   connection: {
//     filename: ".tmp/data.db",
//   },
//   useNullAsDefault: true,
// };

// const postgres = {
//   client: "postgres",
//   connection: {
//     database: "strapi",
//     user: "strapi",
//     password: "strapi",
//     port: 5432,
//     host: "localhost",
//   },
// };

// const mysql = {
//   client: "mysql",
//   connection: {
//     database: "strapi",
//     user: "strapi",
//     password: "strapi",
//     port: 3306,
//     host: "localhost",
//   },
// };

// const db = {
//   mysql,
//   sqlite,
//   postgres,
// };

module.exports = ({ env }) => {
  // console.log("database type", env("DATABASE_TYPE"));
  // return {
  //   client: env("DATABASE_TYPE"),
  //   connection: {
  //     database: env("DATABASE_NAME"),
  //     user: env("DATABASE_USER"),
  //     password: env("DATABASE_PASSWORD"),
  //     port: env("DATABASE_PORT"),
  //     host: env("DATABASE_HOST"),
  //   },
  // };

  return {
    connection: {
      client: "mysql",
      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "root"),
        user: env("DATABASE_USERNAME", "root"),
        password: env("DATABASE_PASSWORD", ""),
        // ssl: {
        //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        // },
      },
      debug: false,
    },
  };
};
