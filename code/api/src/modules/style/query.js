// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { StyleType } from './types'
import { getAll, getById } from './resolvers'

// All
export const styles = {
  type: new GraphQLList(StyleType),
  resolve: getAll
}

// By ID
export const style = {
  type: StyleType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}
