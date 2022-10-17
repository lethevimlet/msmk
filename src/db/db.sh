#!/bin/bash
sqlite3 ./src/db/app.db <<'END_SQL'
CREATE TABLE Users 
(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  password TEXT
);

INSERT INTO Users 
(
  username,
  password
)
VALUES
(
    "guest",
    "guest"
),
(
    "admin",
    "admin"
)
END_SQL