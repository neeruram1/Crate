// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import SubscriptionType from './types'
import { getAll, getByUser, get } from './resolvers'

// Subscriptions All
export const subscriptions = {
  type: new GraphQLList(SubscriptionType),
  resolve: getAll
}

// Subscriptions by user
export const subscriptionsByUser = {
  type: new GraphQLList(SubscriptionType),
  resolve: getByUser
}

// Subscription By id
export const subscription = {
  type: SubscriptionType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}

//Annotation:
//This file is defining Graph QL queries for finding all subscriptions and finding a single subscription by id. It's importing the getAll and getById functions from the resolver.js file and invoking those functions in the appropriate query. For example - in the subscription query - the resolve: get is handling the query for the fields contained in the query, and it is generating the appropriate response.
