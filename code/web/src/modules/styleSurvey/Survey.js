// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'


// // UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import { grey, grey2, secondary } from '../../ui/common/colors'

// // App Imports
// import { getList as getCratesList } from './api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
// import CrateItem from './Item'

// Component
class Survey extends Component {

  // // Runs on server only for SSR
  // static fetchData({ store }) {
  //   return store.dispatch(getCratesList('ASC'))
  // }

  // // Runs on client only
  // componentDidMount() {
  //   this.props.getCratesList('ASC')
  // }

  render() {
    return (
      <div>
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">Welcome to the Style Survey</H3>

            <p style={{ marginTop: '1em', color: grey2 }}>Before we get you subscribed, let's get down your style.<br></br> In each of the following categories, choose the image that best describes you!</p>
          </GridCell>
        </Grid>
        <Grid style={{ backgroundColor: secondary }}>
          <GridCell
            gutter={true}
            style={{
              minWidth: '80vw'
            }}
          >
            <H4>YOLO</H4>
          </GridCell><GridCell
            gutter={true}
            style={{
              minWidth: '80vw'
            }}
          >
            <H4>YOLO</H4>
          </GridCell><GridCell
            gutter={true}
            style={{
              minWidth: '80vw'
            }}
          >
            <H4>YOLO</H4>
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
    crates: state.crates
  }
}

export default connect(listState, null)(Survey)
