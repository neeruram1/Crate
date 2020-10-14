// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { SurveyImageType} from './types'
import { getAll } from './resolvers'

// SurveyImages All
export const surveyImages = {
  type: new GraphQLList(SurveyImageType),
  resolve: getAll
}
