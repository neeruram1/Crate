// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'
export const SURVEY_GET_SURVEY_ITEMS_REQUEST = 'SURVEY/GET_SURVEY_ITEMS_RESPONSE'
export const SURVEY_GET_SURVEY_ITEMS_RESPONSE = 'SURVEY/GET_SURVEY_ITEMS_RESPONSE'
export const SURVEY_GET_SURVEY_ITEMS_FAILURE = 'SURVEY/GET_SURVEY_ITEMS_FAILURE'
export const GET_SURVEY_IMAGES = 'GET_SURVEY_IMAGES'

// export function getSurveyImages(isLoading = true, forceRefresh = false) {
// 	return dispatch => {
// 		dispatch({
// 			type: 'GET_SURVEY_IMAGES',
// 			isLoading: false,
// 			error: null,
// 			surveyImages: surveyImages
// 		})
// 	}
// }



// Actions
// Get list of SURVEY ITEMS
export function getSurveyImages(isLoading = true) {
	return dispatch => {
		dispatch({
			type: SURVEY_GET_SURVEY_ITEMS_REQUEST,
			error: null,
			isLoading
		})

		return axios.post(routeApi, query({
			operation: 'surveyImages',
			fields: ['altText', 'style', 'image', 'category']
		}))
			.then(response => {
				if (response.status === 200) {
					console.log('response', response)
					dispatch({
						type: SURVEY_GET_SURVEY_ITEMS_RESPONSE,
						error: null,
						isLoading: false,
						surveyImages: response
					})
				} else {
					console.error(response)
				}
			})
			.catch(error => {
				dispatch({
					type: SURVEY_GET_SURVEY_ITEMS_FAILURE,
					error: 'Some error occurred. Please try again.',
					isLoading: false
				})
			})
	}
}