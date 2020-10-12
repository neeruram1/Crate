// Imports

// App Imports
import {
  CRATES_GET_LIST_REQUEST,
  CRATES_GET_LIST_RESPONSE,
  CRATES_GET_LIST_FAILURE,
  CRATES_GET_REQUEST,
  CRATES_GET_RESPONSE,
  CRATES_GET_FAILURE,
} from './actions'

// Crates list

// Initial State
// Sets up inital state for the App
const cratesInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
// structure here looks like it should be a reducer due to the switch statements
export const crates = (state = cratesInitialState, action) => {
  switch (action.type) {
    case CRATES_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case CRATES_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case CRATES_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}

// Single crate

//Wondering what needs to go in here...

// Initial State
// Keep in mind this is crate without an S, differing from the above which is crateS
const crateInitialState = {
  isLoading: false,
  error: null,
  item: {}
}

// State
export const crate = (state = crateInitialState, action) => {
  switch (action.type) {
    case CRATES_GET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case CRATES_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        item: action.item
      }

    case CRATES_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}