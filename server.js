const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const db = require("./db/index");
// imports for heroku
const path = require("path")


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", routes);
// additional add.use middleware for heroku
// express.static is in charge of sending static files request to the client.
app.use(express.static(path.join(__dirname, "client", "build")))

const PORT = process.env.PORT || 3001;
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
// called before app.listen to get frontend to serve in heroku
// app.get("*") is a catchall route handler. Needs to be at the bottoem of your server file so that it will on be enacted
// if the API routes above it don't hanle the request
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

db.on("error", console.error.bind(console, "MongoDB Connection Error"));
// app.listen()
app.listen(port);


// app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
