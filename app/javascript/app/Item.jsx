import React from "react";

const Item = ({ item }) => (
	<div className="item">
		{item.id}
		{item.type}
		Quality: {item.quality}
		Days remaining: {item.days_remaining}
	</div>
);

export default Item;
