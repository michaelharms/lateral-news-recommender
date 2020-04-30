// Note: currently no request stubbing possible for fetch API
// https://docs.cypress.io/guides/guides/network-requests.html#Testing-Strategies

describe("Article Extraction", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("shows title", () => {
    cy.contains("News Recommender");
  });

  it("should show error for empty URL input", () => {
    cy.contains("Extract").click();
    cy.contains("Please enter a URL");
  });

  it("should show error for invalid URL", () => {
    cy.contains("URL")
      .click()
      .type("Test");
    cy.contains("Extract").click();
    cy.contains("Not a valid URL");
  });

  it("should extract text for valid URL", () => {
    cy.contains("URL")
      .click()
      .type("https://www.google.com");
    cy.contains("Extract").click();
    cy.contains("We've detected you're using an older version of Chrome.");
  });
});
