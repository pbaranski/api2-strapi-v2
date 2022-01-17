const path = require('path');

if(process.env.DATABASE_URL){
  const parse = require('pg-connection-string').parse;
  const config = parse(process.env.DATABASE_URL);
  module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false
        },
      },
      debug: false,
    },
  });
} else {
  module.exports = ({ env }) => ({
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  });
}


// module.exports = ({ env }) => {
//   // 
//       console.log(parse(env("DATABASE_URL"));
//       const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  
//       return {
//         defaultConnection: "default",
//         connections: {
//           default: {
//             connector: "bookshelf",
//             settings: {
//               client: "postgres",
//               host,
//               port,
//               database,
//               username: user,
//               password,
//               ssl: { rejectUnauthorized: false },
//             },
//             options: {},
//           },
//         },
//       };
//   // }
// };
