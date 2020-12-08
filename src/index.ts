import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema, rootValue } from './schema'
//const express = require('express')
const app = express()
const port = 3000

app.get('/', (req:any, res:any) => res.send("Hello World"))

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: rootValue,
        graphiql: true,
    })
)

app.listen(port, () => console.log(`Express app listening on port ${port}!`))