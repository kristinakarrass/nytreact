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
      <div className="container">
       <div className="jumbotron">
         <h1>New York Times Articles Scrubber</h1>
         <p>Search for and annotate articles of interest!</p>
         <p>
            <Link to="/search"><button className="btn btn-default btn-lg">SEARCH FOR ARTICLES</button></Link>
            <Link to="/results"><button className="btn btn-danger btn-lg">SEE SEARCH RESULTS</button></Link>
            <Link to="/saved"><button className="btn btn-primary btn-lg">SEE YOUR SAVED ARTICLES</button></Link>
         </p>
       </div>
       <div className="container">
        {/*here we make sure the component selected by the user is rendered - default component is the Search component*/}
          {this.props.children}
       </div>
       </div>
	    )
	}


});