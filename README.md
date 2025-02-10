Automation Testing Website
Description

This repository contains automated tests for the SauceDemo website (https://www.saucedemo.com/), written using WebDriverIO (JavaScript) for browser automation and Allure for generating test reports.

The following tests are implemented:

    Login and error verification with the locked_out_user.
    Login with standard_user, product purchase flow, and verification of product details.
    Login with performance_glitch_user, filtering products, and verification of the purchase flow.

Prerequisites

Before you can run the tests, ensure you have the following installed:

    Node.js (v14 or higher)
    npm (Node Package Manager)
    Git (For version control)

Additionally, you’ll need the following packages installed:

    WebDriverIO
    Allure Reporter
    Mocha (Test Framework)

Installation

Clone the Repository
Clone the repository to your local machine:

git clone https://github.com/moriomOdOx/-Automation-Testing.git

Initialize the Project Run the following commands to set up the project:

npm init -y

Use the npm init wizard to initialize the project with the following options:

    Package Name: webdriverio_framework
    Version: 1.0.0
    Description: webdriverio_page_object_framework
    Entry Point: index.js
    Test Command: (Leave empty)
    Git Repository: (Leave empty)
    Keywords: webdriverio_page_object_framework
    Author: moriom Akter
    License: ISC

3. Install WebDriverIO CLI

Install the WebDriverIO CLI globally using:

npm i @wdio/cli

4. Configure WebDriverIO

Run the configuration wizard to set up WebDriverIO with the desired settings:

npx wdio config

The wizard will ask a series of questions to set up the framework:

    A project named "webdriverio_framework" was detected, correct? (Answer yes)
    Testing type: E2E Testing - of Web or Mobile Applications
    Backend: On my local machine
    Environment: Web - web applications in the browser
    Browser: Chrome
    Testing Framework: Mocha
    Typescript: No
    
    Reporter: allure 
    Visual Testing: No
    Services: No
    Run npm install: Yes

5. Install Allure Reporter

Install Allure Reporter to generate reports:

npm install @wdio/allure-reporter --save-dev
npm install -g allure-commandline --save-dev

Tests to Be Executed
01 - Locked Out User Login Test

    Objective: Log in with locked_out_user and verify that the error message is displayed.
    Expected Result: Display an error message indicating that the user is locked out.

02 - Standard User Purchase Flow Test

    Objective:
        Login with standard_user.
        Reset App State using the hamburger menu.
        Add 3 items to the cart.
        Navigate to the final checkout page and verify product names and total price.
        Complete the purchase and verify a successful order message.
        Reset App State again and log out.

03 - Performance Glitch User Test

    Objective:
        Login with performance_glitch_user.
        Reset App State.
        Filter products by name (Z to A).
        Select the first product, add to cart.
        Navigate to checkout and verify product names and total price.
        Complete the purchase and verify a successful order message.
        Reset App State again and log out.

01. Running Tests and Generating Allure Report

To run your tests and generate the Allure report, follow these steps:

    Run the tests:

    npx wdio run wdio.conf.js

Generate the Allure report: After the tests complete, generate the Allure report with:

allure generate allure-results --clean

Open the Allure report: To view the generated report, run:

allure open

The Allure report will open in your browser, displaying detailed information about the test execution, including passed, failed, and skipped tests.
