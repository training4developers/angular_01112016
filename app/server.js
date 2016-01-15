"use strict";

const
	defaultPort = 8080;

require("http")
	.createServer(function(req, res) {

		let filePath = require("url").parse(req.url).path;

		if (filePath === "/" || (
			!filePath.startsWith("/css") &&
			!filePath.startsWith("/fonts") &&
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

		console.log(`web server listening on port ${defaultPort}`);

	});
