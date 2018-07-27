describe("Add a new item", function() {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it('finds the content "type"', function() {
		cy.get("select").select("Tomato");

		cy.contains("Add").click();

		cy.get(".items").should("contain", "Tomato");
	});
});
