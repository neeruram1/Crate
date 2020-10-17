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
import { getSurveyImages, postUserStyle } from './api/actions'

// Component
class Survey extends Component {

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
    if (this.props.surveyImages[1]) {
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
    if (organizedCategories) {
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

  render() {
    let renderedCategories = this.renderCategories()
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
          {/* <GridCell
            gutter={true}
            style={{
              width: 'auto'
            }}
          >
            <Category />
          </GridCell>
          <GridCell
            gutter={true}
            style={{
              width: 'auto'
            }}
          >
            <Category />
          </GridCell>
          <GridCell
            gutter={true}
            style={{
              width: 'auto'
            }}
          >
            <Category />
          </GridCell>
          <GridCell
            gutter={true}
            style={{
              width: 'auto'
            }}
          >
            <Category />
          </GridCell>
          <GridCell
            gutter={true}
            style={{
              width: 'auto'
            }}
          >
            <Category />
          </GridCell>
          <GridCell
            gutter={true}
            style={{
              width: 'auto'
            }}
          >
            <Category />
          </GridCell> */}
        </Grid>
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '3em', textAlign: 'center' }}>
            <Button theme="primary"
              onClick={() => {
                this.props.history.push(userRoutes.subscriptions.path)
                console.log('on button click', { id: this.props.user.details.id, style: 'test style' })
                postUserStyle({ id: this.props.user.details.id, style: 'test style' })
              }}
            >Submit</Button>
            <H3 style={{ marginTop: '1em', color: grey2 }}>You are an Ol Timey Baseball Player</H3>
          </GridCell>
        </Grid>
      </div >
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
    userChoices: state.survey.userChoices,
    user: state.user
  }
}

export default connect(listState, { getSurveyImages, postUserStyle })(withRouter(Survey))