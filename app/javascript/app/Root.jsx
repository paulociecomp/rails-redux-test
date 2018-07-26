import React from "react";
import Navbar from "./Navbar";
import Items from "./Items";
import AddItem from "./AddItem";
import Ticker from "./Ticker";

import { addItem, tick } from "./actions";

const Root = ({ store }) => {
	const state = store.getState();
	return (
		<React.Fragment>
			<Navbar daysElapsed={state.daysElapsed} />

			<div className="root">
				<AddItem
					onAdd={(type, quality) => store.dispatch(addItem(type, quality))}
				/>
				<Items items={state.items} />
			</div>

			<Ticker
				_items={state.items}
				onTick={items => {
					tick(items).then(res => {
						store.dispatch({ type: "TICK", items: res });
					});
				}}
			/>
		</React.Fragment>
	);
};

export default Root;
