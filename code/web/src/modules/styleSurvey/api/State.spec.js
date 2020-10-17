import * as actions from './actions'
import { survey } from './state'

describe('survey reducer', () => {
  let surveyInitialState, state, SURVEY_GET_SURVEY_ITEMS_REQUEST, SURVEY_GET_SURVEY_ITEMS_RESPONSE, SURVEY_GET_SURVEY_ITEMS_FAILURE,

    SURVEY_SELECT_IMAGE, GET_SURVEY_IMAGES, response;

  beforeEach(() => {

    surveyInitialState = {
      isLoading: false,
      error: null,
      surveyImages: {},
      userChoices: { 'vacation': '', 'superpower': '', 'soup': '', 'role model': '', 'home': '', 'alternate universe': '' }
    }
    SURVEY_GET_SURVEY_ITEMS_REQUEST = 'SURVEY/GET_SURVEY_ITEMS_REQUEST'
    SURVEY_GET_SURVEY_ITEMS_RESPONSE = 'SURVEY/GET_SURVEY_ITEMS_RESPONSE'
    SURVEY_GET_SURVEY_ITEMS_FAILURE = 'SURVEY/GET_SURVEY_ITEMS_FAILURE'
    GET_SURVEY_IMAGES = 'GET_SURVEY_IMAGES'
    SURVEY_SELECT_IMAGE = 'SURVEY/SELECT_IMAGE'

    response = {
      data: {
        data: {
          surveyImages: [
            { 
              altText: "An EDM Festival",
              category: "vacation",
              image: "/images/survey/vacation/edm_festival.jpg",
              style: "Bohemian Boulder"
            },
            {
              altText: "Spooky Castle",
              category: "vacation",
              image: "/images/survey/vacation/spooky_castle.webp",
              style: "Mall Goth"
            }
          ]
        }
      }
    }
  })
  
  it('should return the initial state if action.type has no match', () => {
    expect(survey(surveyInitialState,{})).toEqual({
      isLoading: false,
      error: null,
      surveyImages: {},
      userChoices: { 'vacation': '', 'superpower': '', 'soup': '', 'role model': '', 'home': '', 'alternate universe': '' }
    })
  })
  
  it('should handle get survey items request', () => {
    const action = {
      type: SURVEY_GET_SURVEY_ITEMS_REQUEST,
      error: null,
      isLoading: true
    }
    expect(survey(state = surveyInitialState, action)).toEqual({
      ...state,
      isLoading: action.isLoading,
      error: null
    })
  })
  
  it('should handle a survey response', async () => {
    const action = {
      type: SURVEY_GET_SURVEY_ITEMS_RESPONSE,
      error: null,
      isLoading: false,
      surveyImages: response.data.data.surveyImages
    }

    await expect(survey(state = surveyInitialState, action)).toEqual({
      ...state,
      isLoading: false,
      error: action.error,
      surveyImages: action.surveyImages
    })
  })

  it('should handle a failed response', () => {
    const action = {
      type: SURVEY_GET_SURVEY_ITEMS_FAILURE,
      error: 'Some error occurred. Please try again.',
      isLoading: false
    }
    expect(survey(state = surveyInitialState, action)).toEqual({
      ...state,
      isLoading: false,
      error: action.error
    })
  })
  it('should have a reducer for selecting an image', () => {
    const action = {
      type: SURVEY_SELECT_IMAGE,
      category: category,
      style: style
    }

    let newUserChoices = state.userChoices
    newUserChoices[action.category] = action.style
    const category = 'soup'
    const style = 'Bohemian Boulder'
    
    expect(survey(surveyInitialState, action)).toEqual({
      ...state,
      isLoading: false,
      error: null,
      userChoices: newUserChoices
    })
  })
})