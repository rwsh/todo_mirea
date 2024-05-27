const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: false }));
const urlencodedParser = express.urlencoded({extended: false});

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRouter = require("./routes/apiRouter.js");
app.use("/api", apiRouter);

const PORT = 3001;
const DBName = "Todostream";

async function main() {
    try {
        const {
            MONGO_INITDB_ROOT_USERNAME: login,
            MONGO_INITDB_ROOT_PASSWORD: password,
            MONGO_HOST: host
        } = process.env;
        await mongoose.connect("mongodb://"+login+":"+password+"@"+host+"/" + DBName + "?authSource=admin");
        app.listen(PORT);
        console.log("Start Server...");
    } catch(err) {
        return console.log(err);
    }
}

main();

process.on("SIGINT", async() => {
    await mongoose.disconnect();
    console.log("... Stop Server");
    process.exit();
})