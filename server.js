import http from "http";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const server = http.createServer(app);
const PORT = process.env.PORT || 1000;
server.listen(PORT, () => {
  console.log("Server Is Running ");
});
