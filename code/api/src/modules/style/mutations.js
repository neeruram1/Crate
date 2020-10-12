// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { StyleType } from './types'
import { create, remove } from './resolvers'

// Create
export const userSignup = {
  type: StyleType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
export const styleRemove = {
  type: StyleType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
