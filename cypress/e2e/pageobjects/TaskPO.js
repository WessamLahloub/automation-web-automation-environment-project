import TaskLocators from "../locators/TaskLocators";


function Register() {
  cy.visit("register-j/");
  cy.get('h1').contains('Create your profile').should('be.visible');
}

function fillAllRequiredFields() {
  cy.get(TaskLocators.FIRST_NAME).type("Wessam")
  cy.get(TaskLocators.FIRST_NAME_AR).type("وسام")
  cy.get(TaskLocators.LAST_NAME).type("Lahloub")
  cy.get(TaskLocators.LAST_NAME_AR).type("لهلوب")
  cy.get(TaskLocators.EMAIL_REGISTER).type("wessam.lahloub1@gmail.com")
  cy.get(TaskLocators.PASSWORD_REGISTER).type("W123456789")
  cy.get(TaskLocators.BIRTH_DATE_DAY).select("13")
  cy.get(TaskLocators.BIRTH_DATE_MONTH).select("February")
  cy.get(TaskLocators.BIRTH_DATE_YEAR).select("1999")
  cy.get(TaskLocators.MOBILE_PHONE).type("7 9123 3456")
  cy.get(TaskLocators.STUDENT_ID_NUMBER).type("123123")
  cy.SelectDropDownOption(TaskLocators.COMMUNICATION_METHODE, "Friend") // Custom Created Command, Implementation in Commands.js
  cy.get(TaskLocators.TERMS).click()
  cy.get(TaskLocators.CREATE_ACCOUNT).click()
}

function AssertSuccessRegister() {
  cy.get("").click()
}

function login(){
cy.visit("login/")
cy.get('h1').contains('Log in to your Account').should('be.visible');
cy.get(TaskLocators.EMAIL_LOGIN).type("wessam.lahloub1@gmail.com")
cy.get(TaskLocators.PASSWORD_LOGIN).type("W123456789")
cy.get(TaskLocators.LOGIN_BUTTON).click()
}

function AssertSuccessLogin() {
  cy.get("").click()
}




export default { 
  Register, 
  fillAllRequiredFields, 
  AssertSuccessRegister, 
  login, 
  AssertSuccessLogin 
};
