import { items, daysElapsed } from "../../app/reducers";
import { tick, addItem } from "../../app/actions";

test("it ticks", () => {
	expect(daysElapsed(0, tick())).toBe(1);
});

test("it adds an item", () => {
	const state = items([], addItem("New item", 99));
	expect(state.length).toBe(1);

	const item = state[0];
	expect(item.type).toBe("New item");
	expect(item.quality).toBe(99);
	expect(item.days_remaining).toBe(20);
});
