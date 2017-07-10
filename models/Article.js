var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	artileURL: {
		type: String,
		required: true
	},
	date: {
		type: Date
	}
});

var History = mongoose.model("Article", ArticleSchema);
module.exports = Article;