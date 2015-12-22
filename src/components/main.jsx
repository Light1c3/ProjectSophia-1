var React = require('react');
var Header = require('./search');
var Recent = require('./recent-games');

module.exports = React.createClass({
  render: function() {
    return <div className="row panel panel-defualt">
      <div className="col-md-11 col-md-offset-1">
        <Header />
        {this.content()}
      </div>
    </div>
  },
  content: function() {
    if (this.props.children) {
      return this.props.children
    } else {
      return <Recent />
    }
  }
});
