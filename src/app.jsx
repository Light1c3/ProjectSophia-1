var React = require('react');
var Header = require('./header');

var App = React.createClass({
  render: function() {
    return <div className="row panel panel-defualt">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          Welcome to Project Sophia
        </h2>
        <Header />
      </div>
    </div>
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
