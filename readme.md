# Example of cypress testing framework

This is a set of [Cypress.io](https://www.cypress.io) E2E tests. This test will run some smoke tests and the reports will be saved automatically using mochawesome, and mochareports

## Install and use


```shell
npm install
```

for headless testing:
```shell
npm test
```

for opening up the cypress browser:
#### npx is included with npm > v5.2 or can be installed separately.

```shell
npx cypress open
```

## Reporting

 After the test have been run, an HTML report will be saved in `reports/mochareports`. 

## Settings for mac
### for now assuming tests will be run on a windows laptop

ToDo:
- lint and format plugin
- lint mocha format plugin
- add screenshot to report when failing
- parallel execution