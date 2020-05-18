console.log("Start running postgres-env");
const fs = require("fs");
const execa = require("execa");

if (process.env.DATABASE_URL) {
  const databaseConfig = process.env.DATABASE_URL.split("//")[1];
  const [username, passwordAndDb, hostAndPort] = databaseConfig.split(":");
  const [password, host] = passwordAndDb.split("@");
  const [port, databaseName] = hostAndPort.split("/");
  const newLine = "\r\n";
  let output = "";

  execa("heroku", [
    "config:set",
    `DATABASE_HOST=${host}${newLine}`
  ]).stdout.pipe(process.stdout);

  execa("heroku", [
    "config:set",
    `DATABASE_PORT=${port}${newLine}`
  ]).stdout.pipe(process.stdout);

  execa("heroku", [
    "config:set",
    `DATABASE_NAME=${databaseName}${newLine}`
  ]).stdout.pipe(process.stdout);

  execa("heroku", [
    "config:set",
    `DATABASE_USERNAME=${username}${newLine}`
  ]).stdout.pipe(process.stdout);

  execa("heroku", [
    "config:set",
    `DATABASE_PASSWORD=${password}${newLine}`
  ]).stdout.pipe(process.stdout);
}

console.log("Finish running postgres-env");
