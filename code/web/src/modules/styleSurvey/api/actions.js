// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

export const GET_SURVEY_IMAGES = 'GET_SURVEY_IMAGES'

export function getSurveyImages() {
	return dispatch => {
		dispatch({
			type: 'GET_SURVEY_IMAGES',
			isLoading: false,
			error: null,
			surveyImages: { test1: 'test test test' }
		})
	}
}