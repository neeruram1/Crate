// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

export function getSurveyImages(isLoading = true) {
    return dispatch => {
        dispatch({
            type: 'GET_SURVEY_IMAGES',
            surveyImages: { test1: 'test test test' }
        })
    }
}