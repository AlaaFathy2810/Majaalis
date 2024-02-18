/// <reference types="cypress"/>
require('cypress-xpath');
import registrationSelectors from '../selectors/registrationSelectors.cy.js';

export class registrationPage{

    setName(name) {
        cy.get(registrationSelectors.name).type(name);
    }
    setUsername(username) {
        cy.get(registrationSelectors.usernameField).type(username);
    }

    setPhone(phone) {
        cy.get(registrationSelectors.phone).type(phone);
    }
    setPassword(password) {
        cy.get(registrationSelectors.passwordField).type(password);
    }
    setConfirmationPassword(confirmationPassword){
        cy.get(registrationSelectors.confirmationPassword).type(confirmationPassword);
    }
    clickRegister(){
        cy,get(registrationSelectors.regiterButton).click();
    }
    registerWithPhone(name,username,phone,password,confirmationPassword){

        this.setName(name);
        this.setUsername(username);
        this.setPhone(phone);
        this.setPassword(password);
        this.setConfirmationPassword(confirmationPassword);
        this.clickRegister();
    }
    registerWithoutPhone(name,username,password,confirmationPassword){

        this.setName(name);
        this.setUsername(username);
        this.setPassword(password);
        this.setConfirmationPassword(confirmationPassword);
        this.clickRegister();
    }
    

}