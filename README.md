# cypress-grep-example

[![Cypress Tests](https://github.com/testingnotebook/cypress-grep-example/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/testingnotebook/cypress-grep-example/actions/workflows/main.yml)

This project supports the following blog post https://www.testingnotebook.com/posts/tagging-cypress-tests-with-cypress-grep/ which demonstrates how to tag Cypress tests in order to run tests for just a selected group.

## Clone project

```bash
git clone git@github.com:testingnotebook/cypress-grep-example.git
```

## Install dependencies

```bash
npm i
```

## Run tests using a normal Cypress Run

```bash
npm t
```

## Run tests only tagged as @example-tag-1

```bash
npm run test:tag1
```
