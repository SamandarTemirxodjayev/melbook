var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var router = require("./src/routes/router.js");
require("./cdn/index.js");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/api", router);

const PORT = process.env.PORT || 3000;

mongoose
	.connect("mongodb://localhost:27017/melbook")
	.then(() => {
		console.log("connected to database");
	})
	.catch((error) => {
		console.log(error);
	});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
