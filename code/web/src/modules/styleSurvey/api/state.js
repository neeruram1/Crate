// App Imports
import {
    // CRATES_GET_LIST_REQUEST,
    // CRATES_GET_LIST_RESPONSE,
    // CRATES_GET_LIST_FAILURE,
    // CRATES_GET_REQUEST,
    // CRATES_GET_RESPONSE,
    // CRATES_GET_FAILURE,
} from './actions'

// Initial State
const surveyInitialState = {
    isLoading: true,
    error: null,
    surveyImages: { initState: 'initState' }
}

export const survey = (state = surveyInitialState, action) => {
    switch (action.type) {
        case 'GET_SURVEY_IMAGES':
            return {
                ...state,
                surveyImages: action.surveyImages
            }
        default:
            return state
    }
}