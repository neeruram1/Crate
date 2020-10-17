// App Imports
import {
	SURVEY_GET_SURVEY_ITEMS_REQUEST,
	SURVEY_GET_SURVEY_ITEMS_RESPONSE,
	SURVEY_GET_SURVEY_ITEMS_FAILURE,
	SURVEY_SELECT_IMAGE,
	POST_STYLE_REQUEST,
	POST_STYLE_RESPONSE,
	POST_STYLE_FAILURE,
} from './actions'
import state from '../../common/api/state'

// Initial State
const surveyInitialState = {
	isLoading: false,
	error: null,
	surveyImages: {},
	userChoices: { 'vacation': '', 'superpower': '', 'soup': '', 'role model': '', 'home': '', 'alternate universe': '' }
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
		case SURVEY_SELECT_IMAGE:
			let newUserChoices = state.userChoices
			newUserChoices[action.category] = action.style
			console.log('is this happening', newUserChoices)
			return {
				...state,
				isLoading: false,
				error: null,
				userChoices: newUserChoices
			}
		case POST_STYLE_REQUEST:
			return {
				...state,
				isLoading: action.isLoading,
				error: null
			}
		case POST_STYLE_RESPONSE:
			let user = state.user
			user.details.style = action.userStyle
			console.log('POST_STYLE_RESPONSE user', user)
			return {
				...state,
				isLoading: false,
				error: action.error,
				user: user
			}
		case POST_STYLE_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.error
			}
		default:
			return state
	}
}