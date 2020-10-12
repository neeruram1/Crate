// Imports
import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { Helmet } from 'react-helmet'

// // UI Imports
// import { Grid, GridCell } from '../../ui/grid'
// import { H3 } from '../../ui/typography'
// import { grey, grey2 } from '../../ui/common/colors'

// // App Imports
// import { getList as getCratesList } from './api/actions'
// import Loading from '../common/Loading'
// import EmptyMessage from '../common/EmptyMessage'
// import CrateItem from './Item'

// Component
class List extends PureComponent {

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
        Hello World
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

export default connect(listState, null)(List)
