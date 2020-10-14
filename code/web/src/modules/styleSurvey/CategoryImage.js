// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Component
const CategoryImage = (props) => {
  const { children, image, width, height, style, shadow, ...others } = props

  return (
    <img
      src={`${image}`}
      style={{
        width: '15em',
      }}>
    </img>
  )
}

// Component Properties
// Tile.propTypes = {
//   image: PropTypes.string.isRequired,
//   style: PropTypes.object,
//   width: PropTypes.number,
//   height: PropTypes.number,
//   shadow: PropTypes.string
// }
// CategoryImage.defaultProps = {
//   style: {},
//   width: '20em',
//   height: '20em'
// }

// connect go here???????
export default CategoryImage