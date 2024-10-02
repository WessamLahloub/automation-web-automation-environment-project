import TaskLocators from "../locators/TaskLocators";


//User Creates a new account as a Job seeker
function NavigateRegister() {
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
  // cy.get(TaskLocators.STUDENT_ID_NUMBER).type("123123")
  cy.SelectDropDownOption(TaskLocators.COMMUNICATION_METHODE, "Friend") // Custom Created Command, Implementation in Commands.js
  cy.get(TaskLocators.TERMS).click()
  cy.get(TaskLocators.CREATE_ACCOUNT).click()
}

function AssertSuccessRegister() {
  cy.get(TaskLocators.EMAIL_VALIDATION).should('be.visible', { timeout: 10000 }).and('have.text', 'Email address is already used.');
}


//User Sign in with valid cridintials
function Navigatelogin() {
  cy.visit("login/")
}

function EnterLoginCrids() {
  cy.get('h1').contains('Log in to your Account').should('be.visible');
  cy.get(TaskLocators.EMAIL_LOGIN).type("wessam.lahloub1@gmail.com")
  cy.get(TaskLocators.PASSWORD_LOGIN).type("W123456789")
  cy.get(TaskLocators.LOGIN_BUTTON).click()

}

function AssertSuccessLogin() {
  cy.url().should('include', 'myworkspace-j/');
}


//User Should be able to search for a job
function NavigateSearchJob() {
  cy.get(TaskLocators.SEARCH_JOBS_TAB).click()
  cy.url().should('include', 'job-search-results/');
}

function SearchJob() {
  cy.get(TaskLocators.SEARCH_JOBS_FIELD).type("QA")
  cy.get(TaskLocators.FIND_JOBS_BUTTON).click()
}

function AssertJobSearch() {
  //Fetches text inside all elements inside that class, and assert their text
  cy.get(TaskLocators.CARD_JOB_NAME).each(() => {
    cy.get(TaskLocators.CARD_JOB_NAME).should('contain.text', 'QA');
  });
}

 //user logout
function LogoutButton() {
  cy.get(TaskLocators.PROFILE_INFO).trigger('mouseover');
  cy.wait(1000)
  cy.get('ul.logged_hover_panel').invoke('show') //To show right side profile menu
  cy.get(TaskLocators.LOGOUT_BUTTON).should('be.visible').click();
}

function AssertSuccessLogout() {
  cy.url().should('include', 'logout/');
  cy.get(TaskLocators.LOGOUT_MESSAGE).contains("h1", "You've logged out.")
}


export default {
  NavigateRegister,
  fillAllRequiredFields,
  AssertSuccessRegister,
  Navigatelogin,
  EnterLoginCrids,
  AssertSuccessLogin,
  NavigateSearchJob,
  SearchJob,
  AssertJobSearch,
  LogoutButton,
  AssertSuccessLogout
};
