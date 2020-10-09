// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
import { create, remove } from './resolvers'

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

//Annotation:
//This file is defining Graph QL mutations for creating, updating, and removing a user. It's importing the create, update, and remove functions from the resolver.js file and invoking those functions in the appropriate mutation. For example - in the user remove mutation - the resolve: remove is handling the mutation for the fields contained in the mutation, and it is generating the appropriate response.
