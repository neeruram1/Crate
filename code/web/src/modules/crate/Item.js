// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import H4 from '../../ui/typography/H4'
import Icon from '../../ui/icon'
import { white, grey2, black } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/config/env'
import userRoutes from '../../setup/routes/user'
import { messageShow, messageHide } from '../common/api/actions'
import { create } from '../subscription/api/actions'

// Component
class Item extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  /*
  onClickSubscibe is fired when a subscibe buton of the crate card is clicked
  It has a few loading messages that are used to have seemless UX
  the main part of it is calling the create action from the props state
  This changes the users object on the backend adding that to the subscirptions
  There is error handling for the axios call and then a push to the history
  The push to history is a little confusing but i think changes the page to the user subsription page
  */
  onClickSubscribe = (crateId) => {
    this.setState({
      isLoading: true
    })

    this.props.messageShow('Subscribing, please wait...')

    this.props.create({ crateId })
      .then(response => {
        if (response.data.errors && response.data.errors.length > 0) {
          this.props.messageShow(response.data.errors[0].message)
        } else {
          this.props.messageShow('Subscribed successfully.')

          this.props.history.push(userRoutes.subscriptions.path)
        }
      })
      .catch(error => {
        this.props.messageShow('There was some error subscribing to this crate. Please try again.')
      })
      .then(() => {
        this.setState({
          isLoading: false
        })

        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
      })
  }

  /*
  This creates the individual card getting the crate information from the props
  The return is a Card which is found in the ui folder as a basic layout with styling
  Inside the card we have the image of the crate that iss found on the APP_URL
  Then an H4 which is another prestyled component with the name of the crate
  a paragraph of the description
  and a Button component from the ui folder that has a binded onClickSubscribe as the component is built elsewhere
  */
  render() {
    const { id, name, description } = this.props.crate
    const { isLoading } = this.state

    return (
      <Card style={{ width: '18em', backgroundColor: white }}>
        <p style={{ padding: '2em 3em 0 3em' }}>
          <img src={`${APP_URL}/images/crate.png`} alt={name} style={{ width: '100%' }} />
        </p>

        <div style={{ padding: '1em 1.2em' }}>
          <H4 font="secondary" style={{ color: black }}>{name}</H4>

          <p style={{ color: grey2, marginTop: '1em' }}>{description}</p>

          <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
            <Button
              theme="primary"
              onClick={this.onClickSubscribe.bind(this, id)}
              type="button"
              disabled={isLoading}
            >
              <Icon size={1.2} style={{ color: white }}>add</Icon> Subscribe
            </Button>
          </p>
        </div>
      </Card>
    )
  }
}

// Component Properties
Item.propTypes = {
  crate: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function itemState(state) {
  return {
    user: state.user
  }
}

/*
From our store we have gotten the user to add the subscription to and three functions(dispatches)
The dispatches are used in onClickSubscribe
*/
export default connect(itemState, { create, messageShow, messageHide })(withRouter(Item))
