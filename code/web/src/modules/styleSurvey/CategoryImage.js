// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { level3 } from '../../ui/common/shadows'
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
      }}
    >
    </img>
  )
}

// Component Properties
CategoryImage.propTypes = {
  selectedImage: PropTypes.func,
  image: PropTypes.object
}
CategoryImage.defaultProps = {
  style: {},
  width: '20em',
  height: '20em'
}

// Component State

function listState(state) {
  return {
    userChoices: state.survey.userChoices
  }
}

export default connect(listState, { selectImage })(CategoryImage)