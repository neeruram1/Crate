// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Crate type
const CrateType = new GraphQLObjectType({
  name: 'crate',
  description: 'Crate Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default CrateType

//Annotation:
//This file defines crate as a GraphQL object. It needs to be defined here as a GraphQL object in addition to being defined in our database in order to perform GraphQL queries on it as well as being able to reference it in our database. 
