import pkg from '../package.json';
const pgtools = require('pgtools');

const dbName = pkg.name;

const config = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOSTNAME,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT),
};

pgtools.createdb(config, dbName, (err: Error, res: any) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }

  console.log(res);
});
