import express from 'express'
import { app } from './app'

const local = express()

local.use(app)

local.listen(3000, () => {
  console.log('localhost:3000')
})
