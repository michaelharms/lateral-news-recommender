// Note: currently no request stubbing possible for fetch API
// https://docs.cypress.io/guides/guides/network-requests.html#Testing-Strategies

describe("News Recommendations", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("shows title", () => {
    cy.contains("News Recommender");
  });

  it("shows error for empty URL input", () => {
    cy.contains("Find similar articles").click();
    cy.contains("Please enter a URL");
  });

  it("shows error for invalid URL format", () => {
    cy.get("label")
      .contains("URL")
      .click()
      .type("Test");
    cy.contains("Find similar articles").click();
    cy.contains("Not a valid URL");
  });

  it("shows server error for non-existent article URL", () => {
    cy.get("label")
      .contains("URL")
      .click()
      .type("https://no-article.com");
    cy.contains("Find similar articles").click();
    cy.contains("Something went wrong when communicating with the server.");
  });

  it("finds and displays similar articles for valid URL", () => {
    cy.get("label")
      .contains("URL")
      .click()
      .type("https://www.google.com");
    cy.contains("Find similar articles").click();

    // check if similar articles are displayed
    cy.contains("Similar articles");
    cy.contains("% similar");
    cy.get("[data-testid=similar-article]")
      .its("length")
      .should("be.greaterThan", 1);
  });
});
