/// <reference types="cypress" />
import { loginPage } from "../pages/loginPage.cy.js";
import loginSelectors from "../selectors/loginSelectors.cy.js";
import studentData from "../../fixtures/mainData.json";
require('cypress-xpath');

const loginpage = new loginPage();
let usernameValid = studentData["studentModule"]["studentData"]["usernameValid"]
let passwordValid = studentData["studentModule"]["studentData"]["passwordValid"]
let usernameInvalid = studentData["studentModule"]["studentData"]["usernameInvalid"]
let passwordInvalid =studentData["studentModule"]["studentData"]["passwordInvalid"]


describe("Login Test Cases ",()=>{
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          cy.visit('/login')
          
         // loginpage.loginUser(usernameValid,passwordValid)

    });
    it("Login With Valid Data", () => {
        loginpage.loginUser(usernameValid,passwordValid)
        cy.xpath(loginSelectors.successLogin,{ timeout: 10000 }).should('exist');
             
       
      }); 
       
      it("Login With Invalid Data", () => {
          loginpage.loginUser(usernameInvalid,passwordInvalid)
          cy.get(loginSelectors.alertErrorMessage).should("be.visible").should("contain.text",`البريد الإلكتروني أو كلمة المرور غير صحيحة`)
               
         
        }); 
        it("Login With Empty Data", () => {
          loginpage.loginUser("{backspace}","{backspace}")
          cy.xpath(loginSelectors.alertEmptyUsername).should("be.visible").should("contain.text","يجب إدخال  عنوان البريد الإلكتروني")
          cy.xpath(loginSelectors.alertEmptypassword).should("be.visible").should("contain.text","يجب إدخال  كلمة المرور")
         
        }); 
      /*
        it.only("Verify the UI of Login Page", () => {
         cy.get(loginSelector.tamarhIcon).should("be.visible")
         cy.get(loginSelector.WelcomeTamrah).should("be.visible").should("contain.text","Welcome to Tamrah!")
         cy.get(loginSelector.usernameField).should("be.visible")
         cy.get(loginSelector.passwordField).should("be.visible")
         cy.get(loginSelector.loginButton).should("be.visible")
      
      
         
        }); 
*/
});