let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();
app.use(cors());
const db = require("./models/inventory");
const inventoryRoutes = require('./routes/inventoryRoute')
const PORT = 3000;

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use("/api", inventoryRoutes);




db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
});
