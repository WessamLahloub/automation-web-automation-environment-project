const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import TaskPO from "../../e2e/pageobjects/TaskPO";

//User Creates a new account as a Job seeker
Given("user navigate to talentera register page", () => {
  TaskPO.NavigateRegister();
});

When("user fill all required fields", () => {
  TaskPO.fillAllRequiredFields();
});

Then("Assert success message", () => {
  TaskPO.AssertSuccessRegister();
})

//User Sign in with valid cridintials
Given("user navigate to login page", () => {
  TaskPO.Navigatelogin();
})

When("user enters valid cridintials", () => {
  TaskPO.EnterLoginCrids();
})

Then("user should get logged in", () => {
  TaskPO.AssertSuccessLogin();
})

//User Should be able to search for a job
Given("user naviagte to Search Jobs tab", () => {
  TaskPO.NavigateSearchJob();
})

When("user search for certain job", () => {
  TaskPO.SearchJob()
})

Then("only jobs containins the same name should appear", ()=> {
  TaskPO.AssertJobSearch();
})

//user logout

When("user logout from account", ()=> {
  TaskPO.LogoutButton();
})

Then("assert logout success", () => {
  TaskPO.AssertSuccessLogout();
})




