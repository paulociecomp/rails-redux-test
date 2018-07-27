let nextId = 2;

export const fetchTick = items => {
	return fetch("/items/tick", {
		method: "post",
		body: JSON.stringify({ items: items })
	})
		.then(response => {
			return response.json();
		})
		.catch(err => {
			console.log(err);
		});
};

export const addItem = (type, quality) => ({
	type: "ADD_ITEM",
	item: {
		id: nextId++,
		type,
		quality,
		days_remaining: 20
	}
});

export const tick = items => ({
	type: "TICK",
	items: items
});
