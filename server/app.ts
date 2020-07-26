import express from 'express'
const { Nuxt } = require('nuxt')
const config = require('../nuxt.config.js')

config.dev = false

const nuxt = new Nuxt(config)

const app = express()

app.use(async (req, res, next) => {
  await nuxt.ready()
  nuxt.render(req, res, next)
})

export { app }
