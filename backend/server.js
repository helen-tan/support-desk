// CommonJS modules syntax - modules installed w npm are brought into files w this syntax (e.g. express module)
// This is opposed to what we do in React - the ES2015 Modules syntax (import express from 'express')
const express = require('express')
const { get } = require('mongoose')
const dotenv = require('dotenv').config() // With this, we can create a .env file in the root
const PORT = process.env.PORT || 8000 // the the PORT variable from the .env file

// initialize app variable
const app = express()

// Create routes with express (Can be tested with postman)
app.get('/', (req, res) => {
  res.status(200).json({ message : 'Welcome to the Support Desk API' })
})

app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
