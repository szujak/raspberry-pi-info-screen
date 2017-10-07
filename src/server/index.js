require('dotenv').config()

const express = require('express')
const graphqlHTTP = require('express-graphql')

const WeatherSchema = require('../extensions/weather/api')

const app = express()

app.use('/', graphqlHTTP({
  schema: WeatherSchema,
  graphiql: true
}));

app.listen(process.env.PORT, () => console.log(`App is listening on port ${process.env.PORT}!`))
