module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '34.105.215.112'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'ecommerceBD'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'Andre12345'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
