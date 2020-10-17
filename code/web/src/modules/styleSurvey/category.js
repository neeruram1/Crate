import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, GridCell } from '../../ui/grid'
import { H4 } from '../../ui/typography'
import { grey, grey2, grey3, secondary, white } from '../../ui/common/colors'
import { level1, level2, level3, level4, level5 } from '../../ui/common/shadows'
import CategoryImage from './CategoryImage'

class Category extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const selections = this.props.surveyImages.map((image, i) => {
      return (
        <GridCell
          justifyRight={true}
          gutter={false}
          style={{
            marginBottom: '1em',
          }}
        >
          <CategoryImage
            key={i}
            image={image}
          />
        </GridCell>
      )
    })

    return (
      <div style={{
        border: `1em solid ${grey2}`,
        borderRadius: '.1em',
        margin: '3vh 10vw',
        width: '80vw',
        textAlign: 'center',
        alignSelf: 'center',
        boxShadow: `${level4}`
      }}>
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{
            padding: '2vh 0',
            textAlign: 'center',
          }}>
            <H4 font="secondary">{this.props.surveyImages[0].category}</H4>
          </GridCell>
        </Grid >
        <Grid
          style={{
            backgroundColor: grey,
            textAlign: 'center',
            margin: '0',
            padding: '0 8vw',
          }}
        >
          {selections}
        </Grid>

      </div>
    )
  }
}

// Component Properties
// Category.propTypes = {
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
