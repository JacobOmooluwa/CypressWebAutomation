/// <reference types= "cypress" />

//here is the describe block where we describe our test project name
describe("Quales test management suite",  () => {
 
//here is the it block where both test case description and test scripts
  it("Validate that user can login successfully to the Quales Management app",  () => {
  
    //to visit the url
    cy.visit("http://tawdry-rule.surge.sh");
    
    //spyed on the sign in button
    cy.get('.css-48p1y4 > .MuiButton-root') 

// To click
    .click();

// spy on the email repository field
  cy.get('[data-testid=EmailAddress]')

  //type the email
      .type("ay@mail.com");

  // spy on the password input field
    cy.get('[data-testid=Password]')
    .type("pass1234");

  //spy on the login button
    cy.get('.MuiButton-contained')

  //click on the login
    .click();

  // write an assertion that the name ayobami appears
  // spy on the name ayobami
    cy.contains("Ayobami")
    .should("be.visible");
    
    // spy on the add course button
    cy.get('.MuiGrid-root > .MuiButton-root')

    // click on the add course button
    .click();
    cy.viewport(1569, 969);

  // spy on the title button
  cy.get('[data-testid="Title*"]')
  .type("Postman101");

  // spy on the description button
  cy.get('[data-testid="Description*"]')
  .type("Introduction to postman");

  // spy on the select category
  cy.get('#demo-simple-select')
    .click();

  //spy on the Quality Assurance Category
  cy.get('[data-value="1"]')
  .click();

  // spy on the image url category
  cy.get('[data-testid=ImageURL]')
  .type("https://img.freepik.com/free-photo/quality-assurance-clipboard-icon_53876-123828.jpg?w=900&t=st=1665219059~exp=1665219659~hmac=fd98507075000b0937198bdee4d42805f4a83d44dc77773b28643d13ec006d3e");

  //spy on the offline button
  cy.get('[data-testid=offline]')
  .click();

  // Spy on the address button
  cy.get('[data-testid="Address*"]')
  .type("No 72, Ademola Street, Alafia Estate, Ajibode, Ibadan, Oyo State.");

  //spy on the add course button
  cy.get('.css-tzsjye > .MuiButton-root')
  .click();

// spy on the logout button
cy.get('.MuiToolbar-root > .MuiButton-root')
.click();
});


});
