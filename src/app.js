const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

// Maintenance
// app.use((req, res, next) => {
//     res.status(503).send("Site under maintenance")
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app