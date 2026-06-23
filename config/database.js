module.exports = ({ env }) => ({
  connection: {
    client: 'mysql2',
    connection: {
      host:     env('DATABASE_HOST',     '127.0.0.1'),
      port:     env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME',     'u666164720_skyshade_cms'),
      user:     env('DATABASE_USERNAME', 'u666164720_cms_user'),
      password: env('DATABASE_PASSWORD', 'Ealkay@2026!'),
      ssl:      env.bool('DATABASE_SSL', false),
    },
    debug: false,
  },
});