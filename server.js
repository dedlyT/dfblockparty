const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
var playpause = false;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));

app.get("/query-paused", (req,res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(`${playpause}`);
    res.end();
});

app.post("/playpause-music", urlencodedParser, (req,res) => {
    if (req.body.secret == 299934) {
        playpause = !playpause;
    }
});

app.get("/*", (req,res) => {
    res.sendFile(`${__dirname}/public/html/index.html`)
});

app.listen(port, () => {
    console.log(`Running on port ${port}!`);
});