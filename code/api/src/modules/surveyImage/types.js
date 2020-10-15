// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// SurveyImage type
const SurveyImageType = new GraphQLObjectType({
  name: 'surveyImage',
  description: 'SurveyImage Type',

  fields: () => ({
    id: { type: GraphQLInt },
    category: { type: GraphQLString },
    altText: { type: GraphQLString },
    image: { type: GraphQLString },
    style: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})


export { SurveyImageType }
