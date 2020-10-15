// App Imports
import {
	GET_SURVEY_IMAGES
} from './actions'

// Initial State
const surveyInitialState = {
	isLoading: false,
	error: null,
	surveyImages: {},
	userChoices: {}
}

export const survey = (state = surveyInitialState, action) => {
	switch (action.type) {
		case GET_SURVEY_IMAGES:
			return {
				...state,
				surveyImages: action.surveyImages,
				error: null,
				isLoading: action.isLoading,
				userChoices: action.userChoices
			}

		default:
			return state
	}
}