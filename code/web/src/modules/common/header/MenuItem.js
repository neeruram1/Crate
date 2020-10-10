// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import { white } from '../../../ui/common/colors'
import { primary, secondary } from '../../../ui/common/gradients'
import { level1 } from '../../../ui/common/shadows'

// Component
const MenuItem = (props) => {
  const { children, to, type, active, style, section } = props

  const isActiveRoute = () => {
    const currentSection = props.location.pathname.split('/')[1]
    /*
    This part is what makes the menu look to be active based on the path location. 
    If we would like to have our survey page act in the menu we will need to reference this
    but change the Menu.js file  to add a new menu item
    */
    return (currentSection === to.split('/')[1] && currentSection === section)
      || props.location.pathname === to
      || active
  }

  return (
    <Link
      to={to}
      style={
        Object.assign({
          padding: '0.6em 1em',
          textTransform: 'uppercase',
          color: white
        }, isActiveRoute() ? {
          backgroundImage: (type === 'secondary' ? secondary : primary),
          borderRadius: '1.4em',
          boxShadow: level1
        } : style)
      }
    >
      {children}
    </Link>
  )
}

// Component Properties
MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.string,
  active: PropTypes.bool,
  style: PropTypes.object
}
MenuItem.defaultProps = {
  type: 'secondary',
  active: false,
  style: {}
}

export default withRouter(MenuItem)