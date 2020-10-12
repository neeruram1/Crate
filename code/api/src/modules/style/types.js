// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Style type
const StyleType = new GraphQLObjectType({
  name: 'style',
  description: 'Style type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})


export { StyleType }
