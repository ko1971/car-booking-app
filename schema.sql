
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  role VARCHAR(20)
);

CREATE TABLE requests (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  vehicle_type VARCHAR(50),
  date DATE,
  time TIME,
  origin TEXT,
  destination TEXT,
  status VARCHAR(20)
);
