import fs from "fs";
import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "AUTH ERROR" });
  }

  next();
});

server.use(jsonServer.defaults());
server.use(router);

server.post("/login", (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8"),
  );
  const { users } = db;

  const userFromDb = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (userFromDb) {
    return res.json(userFromDb);
  }

  return res.status(403).json({ message: "AUTH ERROR" });
});

server.listen(8080, () => {
  console.log("server is running in 8080 port");
});
