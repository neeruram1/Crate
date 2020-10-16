// App Imports
import {
	SURVEY_GET_SURVEY_ITEMS_REQUEST,
	SURVEY_GET_SURVEY_ITEMS_RESPONSE,
	SURVEY_GET_SURVEY_ITEMS_FAILURE
} from './actions'

// Initial State
const surveyInitialState = {
	isLoading: false,
	error: null,
	surveyImages: {},
	userChoices: { 'RoleModel': 0, 'AlternateUniverse': 0, 'SuperPower': 0, 'Vacation': 0, 'DreamHome': 0, 'Soup': 0 }
}

// export const survey = (state = surveyInitialState, action) => {
// 	switch (action.type) {
// 		case GET_SURVEY_IMAGES:
// 			return {
// 				...state,
// 				surveyImages: action.surveyImages,
// 				error: null,
// 				isLoading: action.isLoading
// 			}

// 		default:
// 			return state
// 	}
// }
export const survey = (state = surveyInitialState, action) => {
	switch (action.type) {
		case SURVEY_GET_SURVEY_ITEMS_REQUEST:
			return {
				...state,
				isLoading: action.isLoading,
				error: null
			}
		case SURVEY_GET_SURVEY_ITEMS_RESPONSE:
			return {
				...state,
				isLoading: false,
				error: action.error,
				surveyImages: action.surveyImages
			}
		case SURVEY_GET_SURVEY_ITEMS_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.error
			}
		default:
			return state
	}
}