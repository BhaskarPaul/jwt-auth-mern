require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

mongoose.connect(process.env.MONGODBURI, () => {
    console.log(`@@@@ Database connected ..... `);
});

app.use("/api/v1/user", require("./routes/user.auth.route"));

app.listen(8000, () => {
    console.log(`@@@@ Server is up and running : http://localhost:8000/`);
});
