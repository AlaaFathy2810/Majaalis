/// <reference types="cypress" />
require('cypress-xpath');

import loginSelectors from "../selectors/loginSelectors.cy.js"

export class loginPage{

navigateToLogin()
{
    cy.visit("https://testone.majaalis-testing.com/home/login?")
}
setUsername(username) {
    cy.get(loginSelectors.usernameField).type(username);
}
setPassword(password) {
    cy.get(loginSelectors.passwordField).type(password);
}
clickLogin() {
    cy.get(loginSelectors.loginButton).click({timeout:50000});
}

loginUser(username, password) {

  this.setUsername(username);
  this.setPassword(password);
  
  this.clickLogin();
}
} 
