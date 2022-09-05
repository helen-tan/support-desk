# Support Desk App

Support ticket application built with the MERN stack. This is a project from Brad Traversy's [React Front to Back](https://www.udemy.com/course/react-front-to-back-2022/) course on Udemy.

## Built with
* React - Client-side framework for highly reactive user interface
* NodeJS - Server-side/Backend JavaScript runtime environment
* Express - NodeJS Framework for simplifying writing of server-side code & logic
* [MongoDB](https://www.mongodb.com/atlas) - NoSQL database solution storing "Documents" in "collections"
* [Mongoose](https://mongoosejs.com/docs/index.html) - Object Data Modelling (ODM) library for MongoDB and NodeJS which maps Object models to a document database like MongoDB. Used for defining schemas for documents in MongoDB collections. 
* [Redux Toolkit](https://redux-toolkit.js.org/) - Global state management library for React. It simplifies Redux development with utilities for creating and managing Redux stores and writing Redux actions and reducers.
* [Heroku](https://www.heroku.com/) - For hosting

## Usage

### Set Environment Variables

Create a .env file in the root directory and add your [MongoDB](https://www.mongodb.com/) database URI and your JWT secret

### Install backend dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd frontend
npm install
```

### Run app in development (frontend & backend)

```bash
npm run dev
```
