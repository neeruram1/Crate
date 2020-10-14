// App Imports
import {
    CRATES_GET_LIST_REQUEST,
    CRATES_GET_LIST_RESPONSE,
    CRATES_GET_LIST_FAILURE,
    CRATES_GET_REQUEST,
    CRATES_GET_RESPONSE,
    CRATES_GET_FAILURE,
} from './actions'

// Initial State
const cratesInitialState = {
    isLoading: true,
    error: null,
    surveyImages: { test: 'testeroooo' }
}