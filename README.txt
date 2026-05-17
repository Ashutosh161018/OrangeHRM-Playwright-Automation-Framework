# OrangeHRM Playwright Automation Framework

## Project Overview

This project is a UI test automation framework developed using Playwright and TypeScript for the OrangeHRM demo application.

The framework validates core functionalities such as login authentication, dashboard validation, recruitment workflows, vacancy management, search functionality, form validation, and basic UI performance checks.

# Application Under Test

OrangeHRM Demo Website:

https://opensource-demo.orangehrmlive.com/


# Tools & Technologies

- Playwright
- TypeScript
- Node.js
- VS Code
- GitHub

# Framework Structure
pages/
assertions/
tests/
playwright.config.ts
package.json


# Test Scenarios Covered

## Login Module

- Valid Login
- Invalid Login
- Empty Login Validation

## Dashboard Module

- Dashboard UI Validation
- Dashboard Widget Verification

## Recruitment Module

- Navigate to Recruitment Module
- Open Add Vacancy Form
- Empty Vacancy Form Validation
- Search Vacancy by Job Title
- Edge Case Search Validation

## Performance/UI

- Dashboard Page Load Performance

# Browsers Supported

- Chromium
- Firefox
- WebKit

# Features Implemented

- Page Object Model (POM)
- Assertion Layer Separation
- Cross-browser Testing
- Form Validation Testing
- Search Functionality Testing
- Performance Sanity Validation

# How to Run Tests

## Install Dependencies

```bash
npm install


## Run All Tests

npx playwright test

## Run Specific Test

npx playwright test tests/AddJobVacancy.spec.ts

## Run Tests in UI Mode

npx playwright test --ui

## Generate HTML Report

npx playwright show-report

## Test Reporting

Playwright HTML reports are generated after execution.

Reports include:

Test status
Screenshots (on failure)
Execution duration
Browser execution details

# Future Enhancements

Data-driven testing
API integration testing
CI/CD pipeline integration
Allure reporting
Environment-based configuration
Docker support