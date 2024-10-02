const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import TaskPO from "../../e2e/pageobjects/TaskPO";


Given("user navigate to talentera register page", () => {
  TaskPO.Register();
});

When("user fill all required fields", () => {
  TaskPO.fillAllRequiredFields();
});

Then("Assert success message", () => {
  TaskPO.AssertSuccessMSG();
})

Given("user navigate to login page", () => {
  TaskPO.login();
})
