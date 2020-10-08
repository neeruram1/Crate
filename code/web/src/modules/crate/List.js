// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import { getList as getCratesList } from './api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
import CrateItem from './Item'

/*
This is the wrapper basically for the crates area
*/
// Component
class List extends PureComponent {

  // Runs on server only for SSR
  static fetchData({ store }) {
    return store.dispatch(getCratesList('ASC'))
  }

  /*
   Here is where the action getList is called notes on that can be found in the actions file
   */
  // Runs on client only
  componentDidMount() {
    this.props.getCratesList('ASC')
  }

  /**
   This is the render that includes
   A Helmet which is the SEO element that styles the tab
   Then there is Grid that contains the information on the inner Header
   Grid Cell is a stylized div to go within the other Grid that has the its own styles
   Then we have another grid that has loading wait
   After load and if there are crates to populate the crates are maped through to make the Items Components
   The CrateItem takes in the property of the individual crate
   */
  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Crates for everyone! - Crate</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">Crates for everyone!</H3>

            <p style={{ marginTop: '1em', color: grey2 }}>You can choose crate which suits your need. You can also
              subscribe to multiple crates.</p>
          </GridCell>
        </Grid>

        {/* Crate list */}
        <Grid>
          <GridCell>
            {
              this.props.crates.isLoading
                ? <Loading />
                : this.props.crates.list.length > 0
                  ? this.props.crates.list.map(crate => (
                    <div key={crate.id} style={{ margin: '2em', float: 'left' }}>
                      <CrateItem crate={crate} />
                    </div>
                  ))
                  : <EmptyMessage message="No crates to show" />
            }
          </GridCell>
        </Grid>
      </div>
    )
  }
}

// Component Properties
List.propTypes = {
  crates: PropTypes.object.isRequired,
  getCratesList: PropTypes.func.isRequired
}

// Component State
function listState(state) {
  return {
    crates: state.crates
  }
}


/*
From the store we get the crates as a whole
we also get the dispatch of getCratesList which is used in the mount
*/
export default connect(listState, { getCratesList })(List)
