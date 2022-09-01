// CommonJS modules syntax - modules installed w npm are brought into files w this syntax (e.g. express module)
// This is opposed to what we do in React - the ES2015 Modules syntax (import express from 'express')
const express = require('express')
const dotenv = require('dotenv').config() // With this, we can create a .env file in the root
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 8000 // the the PORT variable from the .env file
const colors = require('colors')
const connectDB = require('./config/db')
const path = require('path')

// Connect to mongoDB database
connectDB()

// initialize app variable
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Create routes with express (Can be tested with postman)

// Routes (from routes folder)
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'))
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message : 'Welcome to the Support Desk API' })
  })
}

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
