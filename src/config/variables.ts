import convict from 'convict'

import dotenv from 'dotenv'
dotenv.config()

const variables = convict({
  server: {
    url: {
      doc: 'Url of the server',
      format: String,
      default: 'http://localhost',
      env: 'API_URL'
    },
    port: {
      doc: 'Port of the server.',
      format: 'Number',
      default: 8083,
      env: 'PORT'
    }
  },
  db : {
    host: {
      doc: 'Database host',
      format: String,
      default: 'localhost',
      env: 'DB_HOST'
    },
    port: {
      doc: 'Database port',
      format: Number,
      default: 5432,
      env: 'DB_PORT'
    },
    database: {
      doc: 'Database name',
      format: 'String',
      default: 'postgres',
      env: 'DB_NAME'
    },
    user: {
      doc: 'Database user',
      format: 'String',
      default: 'postgres',
      env: 'DB_USER'
    },
    password: {
      doc: 'Database password',
      format: 'String',
      default: 'postgres',
      env: 'DB_PASSWORD'
    }
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'quality', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  }
})

variables.validate()

export { variables }
