# typescript-react-mentor-project

This projects is focused on setting up and developing a fundamental app with the intention of focussing on the basics of typescript and React project setups.
The project will be setup by following this guide: https://fettblog.eu/typescript-react/getting-started/

# Content

- First steps(setting up Git)
- Install NPM Packages

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
