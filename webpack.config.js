const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	target: "node",
	externals: [nodeExternals()],
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "build.js",
	},
};
