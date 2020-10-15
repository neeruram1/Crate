// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

export const GET_SURVEY_IMAGES = 'GET_SURVEY_IMAGES'

export function getSurveyImages(surveyImages) {
	return dispatch => {
		dispatch({
			type: 'GET_SURVEY_IMAGES',
			isLoading: false,
			error: null,
			surveyImages: surveyImages,
			userChoices: { 'RoleModel': 0, 'AlternateUniverse': 0, 'SuperPower': 0, 'Vaction': 0, 'DreamHome': 0, 'Soup': 0 }
		})
	}
}