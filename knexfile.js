require('dotenv').config();

const dev = {
  client: 'mysql',
  connection: {
    database: 'travels',
    user:     'root',
    password: process.env.PASS,
    host:     'localhost',
  },
  migrations: {
    directory: './migrations',
  },
  cors: {
    origin: '*',
    allowedHeaders: [ 'Content-Type', 'x-travels-api-key' ]
  }, 
  port: 8080, 
}

const prod = {
  client: 'mysql',
  connection: {
    database: 'travels',
    user:     'root',
    password: process.env.PASS,
    host:     'localhost',
  },
  migrations: {
    directory: './migrations',
  },
  cors: {
    origin: '*',
    allowedHeaders: [ 'Content-Type', 'x-gods-api-key' ]
  }, 
  port: 8080, 
};

if (process.env.NODE_ENV === 'development') {
  module.exports = dev;
} else if (process.env.NODE_ENV === 'production') {
  module.exports = prod;
} else {
  return null;
}

