var React = require('react');
var Header = require('./search');
var Recent = require('./recent-games');

module.exports = React.createClass({
  render: function() {
    return <div className="row panel panel-defualt">
      <div className="col-md-11 col-md-offset-1">
        <h2 className="text-center ">
          Welcome to Project Sophia
        </h2>
        <Header />
        <Recent />
      </div>
    </div>
  }
});
