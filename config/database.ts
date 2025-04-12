export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "blog_db"),
      user: env("DATABASE_USERNAME", "blog_user"),
      password: env("DATABASE_PASSWORD", "blog_password"),
      ssl: env.bool("DATABASE_SSL", false) && {
        rejectUnauthorized: env.bool("DATABASE_SSL_REJECT_UNAUTHORIZED", false),
      },
    },
    pool: {
      min: 0,
      max: 10,
    },
  },
});
