const express = require("express");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

require("./database");

const routes = requireDir("./routes");
Object.keys(routes).map((route) => app.use("/api", routes[route]));

app.listen(process.env.PORT || 3333);
