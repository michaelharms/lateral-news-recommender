# Lateral News Recommender

[> Try it Live](https://lateral-news-recommender.now.sh)

The Lateral News Recommender can recommend similar articles based on the URL of a news article. The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Clone this repo and then run `yarn install` from inside the project directory.

Next you need to create an `.env` file. This file should declare a `REACT_APP_LATERAL_KEY` environment variable with a Lateral API key.

## Documentation

Components are documented via [Storybook](https://storybook.js.org/).

[> View Component Docs](https://lateral-news-recommender.now.sh/storybook/index.html)

## Deployment

Deployment is setup via a CI/CD pipeline trough Github Actions. The pipeline runs linting, unit tests and end to end tests.

## Scripts

- `yarn start` - Starts development server
- `yarn build` - Builds React app and Storybook docs minified production bundles
- `yarn test` - Runs unit tests
- `yarn lint` - Runs ESlint
- `yarn storybook` - Starts storybook development environment
- `yarn cypress:open` - Starts cypress UI for local testing during development
- `yarn analyze` - Enables inspection of production bundles and their sizes to decide support code splitting decisions
