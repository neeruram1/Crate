import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import { grey, grey2, secondary } from '../../ui/common/colors'
import CategoryImage from './CategoryImage'

class Category extends Component {

  // // Runs on server only for SSR
  // static fetchData({ store }) {
  //   return store.dispatch(getCratesList('ASC'))
  // }

  // // Runs on client only
  // componentDidMount() {
  //   this.props.getCratesList('ASC')
  // }

  render() {
    const imgTile = [1, 2, 3, 4, 5, 6]
    const selections = imgTile.map(image => {
      return (
        <GridCell>
          <CategoryImage 
            // id='Tyler' 
            // category='Camping-Tyler' 
            image={'https://media-exp1.licdn.com/dms/image/C4E03AQFcLZyfrjwZkA/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=VMxP_bu_kZ5FjXqIEMFAruFcv8P84hPo5ObkBJw1GpY'}
            />
        </GridCell>
      )
    })
    return (
      <div style={{
        border: '1px solid black',
        margin: '2em'
        }}>
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H4 font="secondary">Category Name</H4>
          </GridCell>
        </Grid>
        <Grid style={{ backgroundColor: grey }}>
          <Grid>
            {selections}
          </Grid>
            
    

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

export default connect(listState, null)(Category)
