//include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

//NYT API key
var APIkey = "52a91dda0f0c4abd93862a8e252e99ea";

//helper functinos for making API calls
var helper = {

	//this functions serves the purpose of running the query to get the latest articles
	runQuery: function(searchTerm) {
		console.log(searchTerm);
		//find articles
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
		return axios.get(queryURL).then(function(response) {
			console.log(response);
		});
	},

	//this function hits my own server to retrieve the record of saved articles
	getHistory: function() {
		return axios.get("/api");
	},

	//this function posts new articles to our database
	postHistory: function(article) {
		return axios.post("/api", { title: title, articleURL: articleURL, date: date });
	}
};

//exporting the API helper
module.exports = helper;