// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'
export const SURVEY_GET_SURVEY_ITEMS_REQUEST = 'SURVEY/GET_SURVEY_ITEMS_REQUEST'
export const SURVEY_GET_SURVEY_ITEMS_RESPONSE = 'SURVEY/GET_SURVEY_ITEMS_RESPONSE'
export const SURVEY_GET_SURVEY_ITEMS_FAILURE = 'SURVEY/GET_SURVEY_ITEMS_FAILURE'
export const GET_SURVEY_IMAGES = 'GET_SURVEY_IMAGES'
export const SURVEY_SELECT_IMAGE = 'SURVEY/SELECT_IMAGE'

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

export function postUserStyle(userInfo) {
	return axios.post(routeApi, mutation({
		operation: 'updateStyle',
		variables: userInfo,
		fields: ['id', 'style']
	}))
		.catch(error => {
			console.error(error)
		})
}