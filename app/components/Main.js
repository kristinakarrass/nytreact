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
           <div className="page-header center">
              <h1>New York Times Article Scrubber</h1>
              <h2>Search for and annotate articles of interest!</h2>
           </div>
           <div className="container">
              <Search {this.state.search} />
              <Saved {this.state.saved} />
           </div>
	    )
	}


})