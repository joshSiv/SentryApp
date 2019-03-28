# Sentry Angular App

This app is created to demonstrate how to configure an angualar app to leverage Setnry's error tracking features.

## Install npm

Run `npm install` to pull down all dependencies.

## Add keys to Sentry init obj
Please add your token to `src/app/app.module.ts` so that you will be able to see the errors in your Sentry Organization instance.

To create client keys please create a Sentry account and create an Angular project. You can then navigate to the Client Keys uri `https://sentry.io/settings/{insert organization name here}/projects/angular/keys/`

## Running app

Run `npm start` for a dev server. 

Navigate to `http://localhost:4200/`. To see test app with a button that will throw an error and report to Sentry.
