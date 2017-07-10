//include react
var React = require("react");

//include all of the sub-components (children)
var Saved = require("./children/Saved");
var Search = require("./children/Search");

//Helper for making AXAJ requests to our API
var helpers = require("./utils/helpers");

//Creating the Main component
var Main = React.createClass({
	//render the function
	render: function() {
		return (
       <div className="jumbotron">
         <h1>New York Times Articles Scrubber</h1>
         <p>Search for and annotate articles of interest!</p>
         <p>
            <a class="btn btn-danger btn-lg" href="#" role="button">SEARCH FOR ARTICLES</a>
            <a class="btn btn-primary btn-lg" href="#" role="button">SEE YOUR SAVED ARTICLES</a>
         </p>
       </div>
       <div className="container">
          <Search {this.state.search} />
          <Saved {this.state.saved} />
       </div>
	    )
	}


});