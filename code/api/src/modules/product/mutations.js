// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { ProductType } from './types'
import { create, update, remove } from './resolvers'

// Product create
export const productCreate = {
  type: ProductType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    slug: {
      name: 'slug',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    },

    type: {
      name: 'type',
      type: GraphQLInt
    },

    gender: {
      name: 'gender',
      type: GraphQLInt
    },

    image: {
      name: 'image',
      type: GraphQLString
    }
  },
  resolve: create
}

// Product update
export const productUpdate = {
  type: ProductType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    name: {
      name: 'name',
      type: GraphQLString
    },

    slug: {
      name: 'slug',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    },

    type: {
      name: 'type',
      type: GraphQLInt
    },

    gender: {
      name: 'gender',
      type: GraphQLInt
    },

    image: {
      name: 'image',
      type: GraphQLString
    }
  },
  resolve: update
}

// Product remove
export const productRemove = {
  type: ProductType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

//Annotation:
//This file is defining Graph QL mutations for creating, updating, and removing a product. It's importing the create, update, and remove functions from the resolver.js file and invoking those functions in the appropriate mutation. For example - in the product remove mutation - the resolve: remove is handling the mutation for the fields contained in the mutation, and it is generating the appropriate response. 
