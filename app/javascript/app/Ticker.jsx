import React, { Component } from "react";

export default class Ticker extends Component {
	handleClick = () => {
		const { onTick, _items } = this.props;
		onTick(_items);
	};

	render() {
		return (
			<button className="ticker" onClick={this.handleClick}>
				<i className="far fa-clock" />
			</button>
		);
	}
}
