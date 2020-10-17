// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Category from './Category'


// // UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import { grey, grey2, secondary } from '../../ui/common/colors'
import Button from '../../ui/button'

// // App Imports
// import { getList as getCratesList } from './api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
import userRoutes from '../../setup/routes/user'
// import CrateItem from './Item'

// // API imports
import { getSurveyImages } from './api/actions'

// Component
class Survey extends Component {
  constructor(props){
    super(props);
    this.state = {
      completed: false
    }
  }

  // Runs on server only for SSR
  static fetchData({ store }) {
    return store.dispatch(getSurveyImages)
  }

  // // Runs on client only
  componentDidMount() {
    this.props.getSurveyImages()
    console.log('props in survey', this.props)
  }

  organizeCategories() {
    let organizedCategories;
    if(this.props.surveyImages[1]) {
      organizedCategories = this.props.surveyImages.reduce((categories, image) => { 
        if (!categories[image.category]) {
          categories[image.category] = [image]
        } else {
          categories[image.category].push(image)
        }
        return categories
      }, {})
      organizedCategories = Object.values(organizedCategories).filter(category => category.length === 6)
   
    } 
    return organizedCategories
  }

  renderCategories() {
    const organizedCategories = this.organizeCategories()
    console.log('derp', organizedCategories)
    if(organizedCategories) {
      return organizedCategories.map(category => {
        return (
          <GridCell
          gutter={true}
          style={{
            width: 'auto'
          }}
          >
          <Category surveyImages={category} />
        </GridCell>
      )
    })
    }
  }

  sortChoices(choicesObject) {
  let styles = Object.values(choicesObject).reduce((counter, choice) => {
    if (!counter[choice]) {
      counter[choice] = 1
    } else {
      counter[choice]++
    }
    return counter
  }, {})
  return styles
}

  determineResults(choicesObject) {
    let userChoices = this.sortChoices(choicesObject)
    const highestVote = Math.max(...Object.values(userChoices))
    const topPicks = Object.keys(userChoices).filter(choice => {
      return userChoices[choice] === highestVote
    })
    // this.props.history.push(userRoutes.subscriptions.path)
    return (topPicks.length === 1) ? topPicks[0] : 'ol timey baseball player'
  }

  checkInputs = () => {
    // console.log('this is in checkInputs', Object.values(this.props.userChoices).every(choice => choice !== ''))
    return Object.values(this.props.userChoices).every(choice => choice !== '')
  }

  completeSurvey = () => {
    // console.log('inside completeSurvey', this)
    // const checked = Object.values(this.props.userChoices).every(choice => choice !== '')
    if(this.checkInputs()) {
      this.setState({ completed: true })
    } else {
      console.log('derppppppp')
      return false
    }
  }

  render() {
    let renderedCategories = this.renderCategories()
    let checkedInputs = this.checkInputs()
    const result = this.determineResults(this.props.userChoices)
  
    console.log('rendered', renderedCategories)
    return (
      <div>

        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">Welcome to the Style Survey</H3>

            <p style={{ marginTop: '1em', color: grey2 }}>Before we get you subscribed, let's get down your style.<br></br> In each of the following categories, choose the image that best describes you!</p>
          </GridCell>
        </Grid>
        <Grid>
          {renderedCategories}
        
        </Grid>
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '3em', textAlign: 'center' }}>
            {!this.state.completed ? 
              <Button theme="primary"
              onClick={this.completeSurvey}>Submit
              </Button>
              :
              <div>
                <Button theme="primary" 
                  onClick={() => { this.props.history.push(userRoutes.subscriptions.path)  }}>Finish
                </Button>
                <H3 style={{ marginTop: '1em', color: grey2 }}>{result} you bumbpkin!</H3>

              </div>
            }
            
            
          </GridCell>
        </Grid>
      </div>
    )
  }
}

// Component Properties
// List.propTypes = {
//   crates: PropTypes.object.isRequired,
//   getCratesList: PropTypes.func.isRequired
// }

// Component State
function listState(state) {
  return {
    surveyImages: state.survey.surveyImages,
    userChoices: state.survey.userChoices
  }
}

export default connect(listState, { getSurveyImages })(withRouter(Survey))