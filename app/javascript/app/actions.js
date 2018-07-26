let nextId = 2;

export const addItem = (type, quality) => ({
	type: "ADD_ITEM",
	item: {
		id: nextId++,
		type,
		quality,
		days_remaining: 20
	}
});

export const tick = items => {
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
