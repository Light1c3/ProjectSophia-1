var React = require('react');
var InfiniteGrid = require('react-infinite-grid');

var RecentGames = React.createClass({
	render: function() {
		return <div>
			This is {this.props.index}
		</div>
	}
});

module.exports = RecentGames

var items = [];

for (var i = 0; i <= 100000; i++) {
	items.push(<RecentGames index={i} key={"example-" + i} />);
}
