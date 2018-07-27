import React from "react";

const Item = ({ item }) => (
	<div className="item">
		<div className="item-left">
			<span className="item-id">#{item.id}</span>
			<h2 className="item-type">{item.type}</h2>
		</div>

		<div className="item-rigth">
			<p>Quality: {item.quality}</p>
			<p>Days remaining: {item.days_remaining}</p>
		</div>
		<div className="clearfix" />
	</div>
);

export default Item;
