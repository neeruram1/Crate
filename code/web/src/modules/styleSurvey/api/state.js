// App Imports
import {
	SURVEY_GET_SURVEY_ITEMS_REQUEST,
	SURVEY_GET_SURVEY_ITEMS_RESPONSE,
  SURVEY_GET_SURVEY_ITEMS_FAILURE,
  SURVEY_SELECT_IMAGE
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
      return {
        ...state,
        isLoading: false,
        error: null,
        userChoices: newUserChoices
      }
		default:
			return state
	}
}