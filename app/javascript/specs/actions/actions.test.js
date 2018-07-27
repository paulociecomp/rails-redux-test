import { tick, addItem } from "../../app/actions";

// beforeEach(function() {
// 	global.fetch = jest.fn().mockImplementation(() => {
// 		var p = new Promise((resolve, reject) => {
// 			resolve({
// 				ok: true,
// 				Id: "123",
// 				json: function() {
// 					return [{ id: 1, type: "Bread" }];
// 				}
// 			});
// 		});
//
// 		return p;
// 	});
// });

test("action creator tick", () => {
	const items = [{ id: 1, type: "Type description" }];
	const state = tick(items);
	expect(state.type).toBe("TICK");
	expect(state.items).toBe(items);
});

test("action creator addItem", () => {
	const state = addItem("New Item", 9);
	expect(state.type).toBe("ADD_ITEM");
	expect(state.item.type).toBe("New Item");
	expect(state.item.quality).toBe(9);
});
