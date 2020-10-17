// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { level1, level2, level3, level4, level5 } from '../../ui/common/shadows'
import { grey, grey2, grey3, grey4, secondary, white } from '../../ui/common/colors'
import { APP_URL_API } from '../../setup/config/env'
import { selectImage } from './api/actions'
import { connect } from 'react-redux'

// Component
const CategoryImage = (props) => {
  const { image, category, style } = props.image

  return (
    <img
      src={`${APP_URL_API}${image}`}
      style={{
        minWidth: '10em',
        maxWidth: '15em',
        minHeight: '10em',
        maxHeight: '15em',
        boxShadow: `${level3}`,
        cursor: 'pointer',
        margin: '.5em 2em'
      }}
      onClick={() => {
        props.selectImage(category, style)
        console.log('props.userChoices[category]', props.userChoices[category], 'style', style)
      }}
    >
    </img>
  )
}

// Component Properties
CategoryImage.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  shadow: PropTypes.string
}
// CategoryImage.defaultProps = {
//   style: {},
//   width: '20em',
//   height: '20em'
// }

// Component State

function listState(state) {
  return {
    userChoices: state.survey.userChoices
  }
}

export default connect(listState, { selectImage })(CategoryImage)