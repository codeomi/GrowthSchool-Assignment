const app = require("./app");
const dotenv = require("dotenv");

const connectToDatabase = require("./config/database.js");

dotenv.config({ path: "./config/config.env" });

connectToDatabase();
//Handling uncaught expression
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting Down Server due to an Uncaught Exception.`);
  process.exit(1);
});

console.log(process.env.DB_URI);
//config

//connect to databse


const server = app.listen(process.env.PORT, () => {
  console.log(`Serever is workking on https://localhost:${process.env.PORT}`);
});

//unhandled promise
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting Down Server due to unhandled promise");

  server.close(() => {
    process.exit(1);
  });
});
