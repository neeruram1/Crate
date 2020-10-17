// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'
export const SURVEY_GET_SURVEY_ITEMS_REQUEST = 'SURVEY/GET_SURVEY_ITEMS_REQUEST'
export const SURVEY_GET_SURVEY_ITEMS_RESPONSE = 'SURVEY/GET_SURVEY_ITEMS_RESPONSE'
export const SURVEY_GET_SURVEY_ITEMS_FAILURE = 'SURVEY/GET_SURVEY_ITEMS_FAILURE'
export const GET_SURVEY_IMAGES = 'GET_SURVEY_IMAGES'
export const POST_STYLE_REQUEST = 'SURVEY/POST_STYLE_REQUEST'
export const POST_STYLE_RESPONSE = 'SURVEY/POST_STYLE_RESPONSE'
export const POST_STYLE_FAILURE = 'SURVEY/POST_STYLE_FAILURE'

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
					dispatch({
						type: SURVEY_GET_SURVEY_ITEMS_RESPONSE,
						error: null,
						isLoading: false,
						surveyImages: response.data.data.surveyImages
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

export function selectImage(category, style) {
	return dispatch => {
		dispatch({
			type: SURVEY_SELECT_IMAGE,
			category: category,
			style: style
		})
	}
}

// export function postUserStyle(userInfo, isLoading = true) {
// 	return dispatch => {
// 		dispatch({
// 			type: POST_STYLE_REQUEST,
// 			error: null,
// 			isLoading
// 		})

// 		return axios.post(routeApi, mutation({
// 			operation: 'updateStyle',
// 			variables: userInfo,
// 			fields: ['id, style']
// 		}))
// 			.then(response => {
// 				if (response.status === 200) {
// 					console.log('test1', action)
// 					dispatch({
// 						type: POST_STYLE_RESPONSE,
// 						error: null,
// 						isLoading: false,
// 						userStyle: userInfo.style
// 					})
// 				} else {
// 					console.error(response)
// 				}
// 			})
// 			.catch(error => {
// 				dispatch({
// 					type: POST_STYLE_FAILURE,
// 					error: 'Some error occurred. Please try again.',
// 					isLoading: false
// 				})
// 			})
// 	}
// }

export function postUserStyle(userInfo) {
	return dispatch => {
		return axios.post(routeApi, mutation({
			operation: 'updateStyle',
			variables: userInfo,
			fields: ['id', 'style']
		}))
	}
}
// export function update(crate) {
// 	return dispatch => {
// 		return axios.post(routeApi, mutation({
// 			operation: 'crateUpdate',
// 			variables: crate,
// 			fields: ['id']
// 		}))
// 	}
// }