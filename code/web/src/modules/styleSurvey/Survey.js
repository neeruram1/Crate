// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import Category from './Category'


// // UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import { grey, grey2, secondary } from '../../ui/common/colors'

// // App Imports
// import { getList as getCratesList } from './api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
// import CrateItem from './Item'

// // API imports
import { getSurveyImages } from './api/actions'

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
    console.log('props in survey2', this.props)
  }

  render() {

    return (

      <div>
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">Welcome to the Style Survey</H3>

            <p style={{ marginTop: '1em', color: grey2 }}>Before we get you subscribed, let's get down your style.<br></br> In each of the following categories, choose the image that best describes you!</p>
          </GridCell>
        </Grid>
        <Grid>
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
          </GridCell>
          <GridCell
            gutter={true}
            style={{
              width: 'auto'
            }}
          >
            <Category />
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

export default connect(listState, { getSurveyImages })(Survey)
