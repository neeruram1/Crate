// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Component
const CategoryImage = (props) => {
  const { children, image, width, height, style, shadow, ...others } = props

  return (
    <div style={{ minWidth: '5em', minHeight: '5em'}}>
      <p>stuff</p>
      <style jsx>{`
        div {
          background-image:url('${ image}');
          background-size: 100% auto;
          box-shadow: ${ shadow ? shadow : 'none'};
        }
      `}</style>
    </div>
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
CategoryImage.defaultProps = {
  style: {},
  width: '20em',
  height: '20em'
}

// connect go here???????
export default CategoryImage