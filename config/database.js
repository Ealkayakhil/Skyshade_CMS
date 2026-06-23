module.exports = ({ env }) => ({
  connection: {
    client: 'mysql2',
    connection: {
      host:     env('DATABASE_HOST', 'localhost'),
      port:     env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'skyshade_cms'),
      user:     env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl:      env.bool('DATABASE_SSL', false),
    },
    debug: false,
  },
});
