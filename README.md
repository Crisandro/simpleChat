# Simple Chat App

### About:

This is a real-time chat application built using React, React on the frontend with MUI and NodeJS/Express Backend. I also added a mysql for the database.
Note that the database being used is free and it has some limitations and is not recomended for production use except for testing.
It also requires internet to be used to connect from the database online.
Moreover, the app is not yet deployed online because it still have some limitation.

Users are able to login and message other users in real-time.
it uses cookies, so that the user is still logged in after refresh

this is made for my 4th assessment in a job application.

### Features:
*	Login and account functionality
*	Contact List 
*	Chat history
*	Chat composer 


### Tech Stack:

* NodeJS/Express
* Session
* React (Create React App)
* MUI
* mysql (PHPMyAdmin from db4free.net) 
* SASS

## Software 

Before proceeding, please ensure you have the following software installed on your computer.

* Node
* Yarn (optional but recommended)
* Git command line tools

### Useful links

* Download Git CLT - Windows: https://git-scm.com/download/windows Mac: https://git-scm.com/download/mac
* Download Node - https://nodejs.org/en/
* Download Yarn CLT - https://yarnpkg.com/lang/en/docs/install/
* Download VSCode - https://code.visualstudio.com/

## Getting started

Please fork a copy of this repository. Forking a repository allows you to freely experiment with changes without affecting the original project. Alternatively download or clone the master branch.

### Download & Install Dependencies on your machine 

Clone the repo to your machine 

```
git clone <CloneURL>
```

### Lunch the backend

1)	Within terminal or cmd ensure you have navigated inside the 'backend' directory and installed the dependencies

```
cd <../path/to/backend> 
yarn install OR npm install
```

2) Run the script

``` 
npm run serverStart
```

### Lunch the frontend

1) Open a new terminal window and navigate inside the 'frontend' folder as you will need to keep the backend running in the background

```
cd <../path/to/Frontend> 
yarn install OR npm install
```

2) Run the start script

``` 
npm start
```

Your app should be running on: http://localhost:3000
while the backend is running on: http://localhost:3001
