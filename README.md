# Simple Chat App

### [Online Demo](https://react-chatapp-frontend.herokuapp.com)

As the Demo is hosted on a free Heroku account, the servers its hosted on enter ‘sleep mode’ when not in use. If you notice a delay, please allow a few seconds for the servers to wake up.


### About:

This is a real-time chat application built using React (Create React App on the frontend) and NodeJS/Express Backend.

Users are able message other users in real-time.

### Tech Stack:

* NodeJS/Express
* React (Create React App)
* mysql
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
