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

### @types/react

### @types/react-dom

## Dependencies

### react

### react-dom

### tslib
