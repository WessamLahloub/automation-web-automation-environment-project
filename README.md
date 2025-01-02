# QA Pros Cypress Project with Cucumber and Page Object Model (POM)

## Overview

This project uses **Cypress** for end-to-end testing and incorporates **Cucumber** to implement Behavior-Driven Development (BDD). The **Page Object Model (POM)** design pattern is employed to create a structured and maintainable approach for writing test scripts.

### Key Components

- **Page Objects**: 
  - Located in the `page_objects` directory, these files encapsulate the methods that interact with specific parts of the application. For example, `TaskPO.js` contains functions related to tasks and user interactions.

- **Cucumber Features**: 
  - The `features` directory contains `.feature` files written in Gherkin syntax. Each feature file outlines scenarios for different functionalities, It helps in reusing the implementations instead of created suplicate ones

- **Step Definitions**: 
  - Located in the `step_definitions` directory, these files map the steps in the feature files to the actual implementation using Cypress commands.

## Installation

To set up the project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone [https://github.com/WessamLahloub/QAProsWebAutomation]
   cd your-repo
2. Install Dependencies: Make sure you have Node.js and npm installed. Then run the following command to install the required dependencies which should automatically install all needed tools 
   
npm install

3. Required Packages: This project requires the following packages:

*Cypress*: For end-to-end testing.
*Cucumber*: For BDD-style test writing.
*@badeball/cypress-cucumber-preprocessor*: Integration of Cucumber with Cypress.
*Allure Reports*: For reporting the status of each testcase
These will be installed as part of the npm install command, provided they are listed in the package.json.

4. Running Tests
   
***To open the Cypress Test Runner and see the test execution(headed), use the following command:***

 ```bash
npx cypress open

***To open the Cypress Test Runner in headless mode, use the following command:***

 ```bash
npx cypress run

***To open the Allure report to see the testcases status, run the following commands:***

 ```bash
npm run browser:chrome      //To run the test and generate the data in allure-results file
npm run report:allure       //to view the allure report file


