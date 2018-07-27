describe("Tick items", function() {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
		cy.get(".ticker").click();
	});

	it("icrements days elapsed", function() {
		cy.get(".days-elapsed").should("contain", "Days elapsed: 1");
	});

	it("decrements item days remaining", function() {
		cy.get(".item-rigth").should("contain", "Days remaining: 1");
	});
});
