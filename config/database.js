// const path = require("path");

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
        schema: env("DATABASE_SCHEMA", "public"), // Not required
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        },
      },
      debug: false,
    },
  };
};

// Use this configuration for an SQLite database on your machine.
// module.exports = ({ env }) => ({
//   connection: {
//     client: "sqlite",
//     connection: {
//       filename: path.join(
//         __dirname,
//         "..",
//         env("DATABASE_FILENAME", ".tmp/data.db")
//       ),
//     },
//     useNullAsDefault: true,
//   },
// });
