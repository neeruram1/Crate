// App Imports
import {
	GET_SURVEY_IMAGES
} from './actions'

// Initial State
const surveyInitialState = {
	isLoading: false,
	error: null,
	surveyImages: {},
}

export const survey = (state = surveyInitialState, action) => {
	switch (action.type) {
		case GET_SURVEY_IMAGES:
			console.log('survey reducer works', action.surveyImages, 'uhhh')
			return {
				...state,
				surveyImages: action.surveyImages
			}

		default:
			console.log('survey reducer doesnt work')
			return state
	}
}