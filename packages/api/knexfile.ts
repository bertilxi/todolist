const db = {
  client: "sqlite3",
  connection: {
    filename: "./db.sqlite3"
  },
  useNullAsDefault: true
};

export const configs = {
  development: db,
  production: db
};

module.exports = configs;
