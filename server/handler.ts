import awsServerlessExpress from 'aws-serverless-express'
import { Handler } from 'aws-lambda'

import { app } from './app'

const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml'
]

const server = awsServerlessExpress.createServer(app, undefined, binaryMimeTypes)

export const handler: Handler = (event, context) => {
  console.log('event', JSON.stringify(event))
  awsServerlessExpress.proxy(server, event, context)
}
