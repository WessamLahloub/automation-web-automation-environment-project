# Automation Cypress Project Complete Environment based on javascript with Cucumber and Page Object Model (POM), Integrated with allure and has a parallel test method, also is a Dockerised project

<span style="color:red">

**Note:** This environment is carefully crafted by Wesam with passionate love for automation and will always be updated to follow *PERFECT* practices in Cypress. Every function here is optimized to execute flawlessly within **5-6 seconds**, complete with a beautifully generated Allure report to showcase the magic.

</span>

## Overview

This project uses **Cypress** for end-to-end testing and incorporates **Cucumber** to implement Behavior-Driven Development (BDD). The **Page Object Model (POM)** design pattern is employed to create a structured and maintainable approach for writing test scripts.

### Key Components

- **Page Objects**:
  - Located in the `page_objects` directory, these files encapsulate the methods that interact with specific parts of the application. For example, `TaskPO.js` contains functions related to tasks and user interactions.

- **Cucumber Features**:
  - The `features` directory contains `.feature` files written in Gherkin syntax. Each feature file outlines scenarios for different functionalities, helping to reuse implementations instead of creating duplicate ones.

- **Step Definitions**:
  - Located in the `step_definitions` directory, these files map the steps in the feature files to the actual implementation using Cypress commands.

- **Custom Commands**:
  - The `commands.js` file includes reusable Cypress commands for common interactions, making the test scripts more concise and maintainable.

## Installation

To set up the project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/WessamLahloub/qa-pros-web-automation-project
   cd qa-pros-web-automation-project
   ```

2. **Install Dependencies**:
   Make sure you have Node.js and npm installed. Then run the following command to install the required dependencies:
   ```bash
   npm install
   ```

3. **Required Packages**:
   This project requires the following packages:
   - **Cypress**: For end-to-end testing.
   - **Cucumber**: For BDD-style test writing.
   - **@badeball/cypress-cucumber-preprocessor**: Integration of Cucumber with Cypress.
   - **Allure Reports**: For generating detailed test reports.

   These will be installed as part of the `npm install` command, provided they are listed in the `package.json` file.

## Running Tests

1. **To open the Cypress Test Runner and see the test execution (headed)**:
   ```bash
   npx cypress open
   ```

2. **To run tests in headless mode**:
   ```bash
   npx cypress run
   ```

3. **To generate Allure results and view the report**:
   - Run the tests with the following command to generate the `allure-results` folder:
     ```bash
     npm run browser:chrome
     ```
   - Generate and open the Allure report:
     ```bash
     npm run report:allure
     ```

4. **To run tests in parallel mode (Uses chrome and electron browsers):**
   ```bash
   npm run test:parallel
   ```

## Docker Support

This project is Dockerized to ensure a consistent environment for running tests.

1. **Dockerfile**:
   The `Dockerfile` is configured to create a containerized Cypress environment. It uses the official Cypress Docker image as the base and installs project dependencies.

2. **.dockerignore**:
   The `.dockerignore` file is included to exclude unnecessary files and directories (e.g., `node_modules`, logs, etc.) from the Docker build context.

3. **Building the Docker Image**:
   To build the Docker image, use the following command:
   ```bash
   docker build -t cypress-project .
   ```

4. **Running the Docker Container**:
   To run the tests in the Docker container interactively:
   ```bash
   docker run -it cypress-project
   ```

## Project Structure

Here’s an overview of the key directories and files:

- `cypress/`
  - Contains all Cypress test files, including `e2e`, `task.feature` inside e2e, and `support`.

- `page_objects/`
  - Contains Page Object files that define methods for interacting with different parts of the application.

- `step_definitions/`
  - Contains step definition files mapping Gherkin steps to Cypress commands.

- `commands.js`
  - should contain reusable Cypress commands (this project didn't need them).

- `Dockerfile`
  - Defines the Docker image configuration.

- `.dockerignore`
  - Specifies files and directories to exclude from the Docker build context.

## Notes

- Ensure that you have docker desktop and it's running while executing the docker commands
- The project is designed to be extendable and maintainable by following the POM design pattern and using reusable custom commands.
- the parallel testing uses chrome and electron browsers, don't forget to install electron if you don't have it

All Regards, Wessam Lahloub!
