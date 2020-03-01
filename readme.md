# Example of cypress testing framework

This is with a set of [Cypress.io](https://www.cypress.io) E2E test. This test will run a smoke test and the reports will be saved automatically using mochawesome, and mochareports

## Install and use


```shell
npm install
```

for headless testing:
```shell
npm test
```

for opening up the cypress browser:
npx is included with npm > v5.2 or can be installed separately.
```shell
npx cypress open
```

## Reporting

After the test have been run, an HTML report will be saved in `reports/mochareports`. 

## Settings for mac

ToDo:
- lint and format plugin
- lint mocha format plugin