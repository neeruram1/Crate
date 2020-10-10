// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import CrateType from './types'
import { getAll, getById } from './resolvers'

// Crates All
export const crates = {
  type: new GraphQLList(CrateType),
  args: {
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// Crate By ID
export const crateById = {
  type: CrateType,
  args: {
    crateId: { type: GraphQLInt }
  },
  resolve: getById
}

//Notes: Graph QL queries for finding all crates and finding a single crate by
// id. It's importing the getAll and getById functions from  resolver.js and
// invoking those functions in the query.
// Ex. crateById query - the resolve: getById is handling the query for the
// fields contained in the query, and it is generating the appropriate response.
