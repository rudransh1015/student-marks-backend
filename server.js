const http = require('http');
const fs = require("fs");

const data = require("./data.json")
const F = require("./function.js");
const { json } = require('stream/consumers');


 function getResponse(url) {

    const parts = url.split("/");

    const route = parts[1];

    const student =
        parts[2];

    switch(route) {

        case "":
            return fs.readFileSync("./menu.txt", "utf-8")

        case "marks":
            return F.Marks(student);

        case "totalmarks":
            return F.TotalMarks(student);

        case "avgmarks":
            return F.AverageMarks(student);

        case "percentage":
            return F.Percentage(student);

        case "highestlowestmarks":
            return F.HighestLowestMarks(student);

        default:
            return "404 Not Found";

    }

}

const server = http.createServer(function(req, res) {
    if (req.url === "/favicon.ico")
     return res.end();

    const response =
        getResponse(req.url);

    log(req.url);

    res.end(
        JSON.stringify(response)
    );

});

function log(url) { 
    
    const entry =
        `${new Date().toLocaleString()} : ${url}\n`;

    fs.appendFile(
        "log.txt",
        entry,
        function(err) {

            if (err) {
                console.log(err);
            }

        }
    );

}

server.listen(8000, function() {console.log("server started ");

});