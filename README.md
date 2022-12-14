# typescript-react-mentor-project

This projects is focused on setting up and developing a fundamental app with the intention of focussing on the basics of typescript and React project setups.
The project will be setup by following this guide: https://fettblog.eu/typescript-react/getting-started/

# Content

- First steps(setting up Git)
- Install NPM Packages
- Set up compiler options
- Unexpected problem- migrate js react app to typescript
- Component
  - Functional components
  - Stateful class components
  
The first step in this project was to simply create a remote repository using git hub.
This is the guide I used to setup the Repo: https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github

# First steps(setting up Git)

Steps followed:

- Create new repo on GitHub
- Navigate to working directory in terminal in vsCode
- In the command line initialize the local directory as a Git repo by typeing: $ git init -b main
- Add files by typing : git add .
- Commit files by typing : git commit -m "First commit"
- Connect the local repoistory to the remote repository by following these steps :
  - git remote add origin <REMOTE_URL>
  - Sets the new remote
  - git remote -v
  - Verifies the new remote URL
    note the <REMOTE_URL> is found on git hub under the code tab in you repository
- Push the changes to the remote repo by typing: git push origin main

# Install NPM Packages

## Development dependencies

### typescript

TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.
Link : https://www.npmjs.com/package/typescript

### @types/react

This contains type definitions for React. Does this enable React to read/validate typescript types?

### @types/react-dom

This contains type definitions for React(react-dom).
Note \* The Document Object Model (DOM). Useful link : https://www.w3.org/TR/REC-DOM-Level-1/introduction.html#:~:text=The%20Document%20Object%20Model%20(DOM,document%20is%20accessed%20and%20manipulated.

## Dependencies

### react

React is a JavaScript library for creating user interfaces.

### react-dom

This install the renderer to create the DOM with the React library

### tslib

This is a runtime library for TypeScript that contains all of the TypeScript helper functions.
Useful link : https://www.npmjs.com/package/tslib

# Set up compiler options

Follow these steps:
- Create a file called tsconfig.json
  - This file specifies the root files and the compiler options required to compile the project.
  - Useful link: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- Inside this file set the following values in an object callerd compilerOptions: 
  
    "compilerOptions: {  
        "jsx": "react",  (*JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React. This specifies that we are compiling in react*)  
        "jsxFactory": "h", (*This specifies which DOM implemntation to use other than React.createElement*) 
        "allowSyntheticDefaultImports": true, (*This allows us to import type deifnitions and React featurs in a destructured way eg. import React { Component, FunctionComponent } from 'react'*) 
        "esModuleInterop": true,  
        "lib": [
          "dom", "es2015"
          ], (*Libraries support client-side development*)
        "experimentalDecorators": true,
    }

# Unexpected problem :)
I realised after the initial set-up that all files were compiled as .jsx files and not .tsx so this meant that I had to migrate the app to a typescript project.
 - I used this useful link : https://www.sitepoint.com/how-to-migrate-a-react-app-to-typescript/
# Creating Components

## Functional components
  - Useful link: https://app.pluralsight.com/guides/defining-props-in-react-function-component-with-typescript

# Create React App README
    # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

