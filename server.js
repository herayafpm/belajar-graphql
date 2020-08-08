const express = require('express')
const {graphqlHTTP} = require('express-graphql')

const app = express()

const PORT = 4000
// import schema graphql
const schema = require('./schema')
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(PORT,()=> {
    console.log(`Server listening in port ${PORT}`)
})