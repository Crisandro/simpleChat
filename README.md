# Simple Chat App

### Deployed App: 
 Simple Chat App link: https://crisandro.github.io/SimpleChat-frontend/

### About:

This repository only has the frontend of the app, the backend is running in a different repo that is connected with render.
This is a real-time chat application built using React, React on the frontend with MUI and NodeJS/Express for the Backend. I also added a mysql for the database.
Moreover, the app still have some limitation and I am still currently adding some features for it to meet high standard functionalities.

Users are able to login and message other users in real-time.
it uses cookies, so that the user is still logged in after refresh

this is just a sample chat app made for my portfolio, you can copy it but emplement some changes to make it unique for you.

### Features:
as for now it has:
*	Login and account functionality
* Chat functionality
*	Contact List 
*	Chat history

### Tech Stack:
* NodeJS/Express
* Session
* React (Create React App)
* MUI
* mysql
* SASS
* CORS (For cross-origin server compatibility)

## Software 
Before proceeding, please ensure you have the following software installed on your computer.

* Node
* Yarn (optional but recommended)
* Git command line tools
* XAMPP (for the database, sql file for import is included here)
* mysql (version 8.0.32 or up)

### Useful links

* Download Git CLT - Windows: https://git-scm.com/download/windows Mac: https://git-scm.com/download/mac
* Download Node - https://nodejs.org/en/
* Download Yarn CLT - https://yarnpkg.com/lang/en/docs/install/
* Download VSCode - https://code.visualstudio.com/
* Download XAMPP - https://www.apachefriends.org/

## Getting started

Please fork a copy of this repository. Forking a repository allows you to freely experiment with changes without affecting the original project. Alternatively download or clone the master branch.

### Download & Install Dependencies on your machine 

Clone the repo to your machine 

```
git clone <CloneURL>
```

### Import the database

1) Install XAMPP and mysql workbench 

2) run XAMPP and start 'Apache'

3) go to your browser and search for 'http://localhost/phpmyadmin/'

4) create a database name it whatever you want also change the databasename on the backend file to the name of the database you created

5) import the file 'simplechat.sql' by going to the import tab in phpMyAdmin to import the tables needed for the database.

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
