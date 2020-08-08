const graphql = require('graphql')
const axios = require('axios')
const { response } = require('express')

const {GraphQLObjectType,GraphQLInt,GraphQLString,GraphQLNonNull,GraphQLSchema,GraphQLList} = graphql

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type:GraphQLString},
        nama: {type: GraphQLString}
    }
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue,args){
                return axios.get(`http://localhost:3000/users/${args.id}`).then(response=>response.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})