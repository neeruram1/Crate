// Imports
import axios from 'axios'

// These seem to be coming from node_modules and has something to do with the build environment. Syntax seems confusing and I think we will not be touching this for the project.
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
// These action types simply result in strings that are used for the actions below. 
// I think they do this for two reasons, 1) the variable itself tells the dev exactly what the action needs to do, 2) the string does the same but identifies the relevant file path. 
// The variables are scoped outside of the action itself, though, need clarification on the why.
export const CRATES_GET_LIST_REQUEST = 'CRATES/GET_LIST_REQUEST'
export const CRATES_GET_LIST_RESPONSE = 'CRATES/GET_LIST_RESPONSE'
export const CRATES_GET_LIST_FAILURE = 'CRATES/GET_LIST_FAILURE'
export const CRATES_GET_REQUEST = 'CRATES/GET_REQUEST'
export const CRATES_GET_RESPONSE = 'CRATES/GET_RESPONSE'
export const CRATES_GET_FAILURE = 'CRATES/GET_FAILURE'

// Actions

// Get list of crates
// DESC might stand for descending order
export function getList(orderBy = 'DESC', isLoading = true) {
  return dispatch => {
    // error and isLoading are the payloads here for this action.
    // are they combining the dispatch into the action? or is this typical syntax
    dispatch({
      type: CRATES_GET_LIST_REQUEST,
      error: null,
      isLoading
    })

    // Route api here is basically taking in the .process, will probably need to check out docs though to see what the arg is for specifically
    return axios.post(routeApi, query({
      // IIRC, 'crates' is similar to Type in an action
      operation: 'crates',
      // orderBy is a method of sorting? 
      variables: { orderBy },
      // I believe we put in whatever information we need in the below array  and are returned that information. Will need to make sure
      fields: ['id', 'name', 'description', 'createdAt', 'updatedAt']
    }))
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: CRATES_GET_LIST_RESPONSE,
            error: null,
            isLoading: false,
            list: response.data.data.crates
            // should return a list of crates. probably.
          })
        } else {
          console.error(response)
        }
      })
      .catch(error => {
        dispatch({
          type: CRATES_GET_LIST_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Get single crate
// I believe slug is similar to a product code used for Identification
export function get(slug, isLoading = true) {
  return dispatch => {
    dispatch({
      type: CRATES_GET_REQUEST,
      isLoading
    })
    // dispatch is invoked(?) above but this function uses axios.post to get information
    // axios uses two args, first is the URI/endpoint of the server, the second is "an object which contains the properties that we want to send to our server should be passed to it."

    // More info found https://www.educative.io/edpresso/how-to-make-an-axios-post-request
    return axios.post(routeApi, query({
      operation: 'crate',
      variables: { slug },
      fields: ['id', 'name', 'slug', 'description', 'image', 'createdAt']
    }))
    // We take the result and if good, dispatch the new object with the important information being in the item prop
      .then(response => {
        dispatch({
          type: CRATES_GET_RESPONSE,
          error: null,
          isLoading: false,
          item: response.data.data.crate
        })
      })
      .catch(error => {
        dispatch({
          type: CRATES_GET_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Get single crate by Id
// This function also does a post but doesn't have error handling in it for some reason
export function getById(crateId) {
  return dispatch => {
    return axios.post(routeApi, query({
      operation: 'crateById',
      variables: { crateId },
      fields: ['id', 'name', 'description']
    }))
  }
}

// Create or update crate
export function createOrUpdate(crate) {
  // if crate.id exists, this method returns whatever update() returns which is down below
  // put more simply, the conditional determines this: If there is a crate, update it, if not, create it.
  if (crate.id > 0) {
    return update(crate)
  } else {
    delete crate.id
    return create(crate)
  }
}

// Create crate
export function create(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'crateCreate',
      variables,
      fields: ['id']
    }))
  }
}

// Update crate
export function update(crate) {
  // update() is an axios call that utilizes mutation. This is similar to the query() I saw earlier so it seems queries is for retrieving information and mutations are for updating? 
  // Still unsure what it's updating or returning here though, maybe dispatch gives the id?  
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'crateUpdate',
      variables: crate,
      fields: ['id']
    }))
  }
}

// Remove crate
export function remove(variables) {
  return dispatch => {
    // same as above, these probably go to the reducer somewhere and that's where the logic lives. We need the id specifically to loop through the crates array and find the crate to be deleted
    return axios.post(routeApi, mutation({
      operation: 'crateRemove',
      variables,
      fields: ['id']
    }))
  }
}
