var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {

    if (req.url === "/") {

        fs.readFile("./client/index.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);

        });

    }
    else if (req.url.match("\.css$")) {
        var cssPath = path.join(__dirname, 'client', req.url);
        console.log(cssPath);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(res);
    }
    else if (req.url.match("\.js$")) {
        var jsPath = path.join(__dirname, 'client', req.url);
        console.log(jsPath);
        var fileStream = fs.createReadStream(jsPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/javascript" });
        fileStream.pipe(res);
    }
    else if (req.url.match("\.json$")) {
        var jsPath = path.join(__dirname, '', req.url);
        console.log(jsPath);
        var fileStream = fs.createReadStream(jsPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/json" });
        fileStream.pipe(res);
    }
    else{
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("No page found")

    }


}).listen(3000);

