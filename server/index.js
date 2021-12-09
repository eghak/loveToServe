require("dotenv").config();
const express = require("express");
const massive = require("massive");
const cors = require("cors");

const userController = require("./userController");
const sopostController = require("./sopostController");
const signinController = require("./signinController");
const solistController = require("./solistController")

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(cors());
app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
  })
  .catch((err) => console.log(err));

//Endpoint(or also called Routes)

//(signIn endpoint/routes)
app.post("/api/user/signin", signinController.create);

//(user endpoint/routes)
app.post("/api/user", userController.create);
app.get("/api/user", userController.getAll);
app.get("/api/user/:id", userController.getOne);
app.put("/api/user/:id", userController.create);
app.delete("/api/user/:id", userController.create);

//(soPost endpoint/routes)
app.post("/api/sopost", sopostController.create);
app.get("/api/sopost", sopostController.getAll);
app.get("/api/sopost", sopostController.getOne);
app.put("/api/sopost,", sopostController.create);
app.delete("/api/sopost", sopostController.create);

//(soList endpoint/routes)
app.get("/api/solist", solistController.getAll)


app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
