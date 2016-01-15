"use strict";

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

var
	defaultPort = 8080;

require("http")
	.createServer(function(req, res) {

		var filePath = require("url").parse(req.url).path;

		if (filePath === "/" || (
			!filePath.startsWith("/css") &&
			!filePath.startsWith("/fonts") &&
			!filePath.startsWith("/tpls") &&
			!filePath.startsWith("/js")
		)) {
			filePath += "index.html";
		}

		if (filePath.startsWith("/css")) {
			res.setHeader("Content-Type", "text/css");
		}

		if (filePath.startsWith("/js")) {
			res.setHeader("Content-Type", "text/javascript");
		}

		require("fs").readFile(require("path").join("./www", filePath),
			function(err, data) {

				if (err) {
					console.log(err);
					return;
				}

				res.end(data);

			});

	})
	.listen(defaultPort, function() {

		console.log("web server listening on port " + defaultPort);

	});
