// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import SubscriptionType from './types'
import { create, remove } from './resolvers'

// Subscription create
export const subscriptionCreate = {
  type: SubscriptionType,
  args: {
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Subscription remove
export const subscriptionRemove = {
  type: SubscriptionType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

//Annotation:
//This file is defining Graph QL mutations for creating, updating, and removing a subscription. It's importing the create, update, and remove functions from the resolver.js file and invoking those functions in the appropriate mutation. For example - in the subscription remove mutation - the resolve: remove is handling the mutation for the fields contained in the mutation, and it is generating the appropriate response.

//One thing to note here is that subscriptionCreate requires a 'crateId'
