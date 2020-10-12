// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'

// UI Imports
import styles from './styles'

// App Imports
import { getList as getCratesList } from '../../crate/api/actions'
import { getListByUser as getSubscriptionListByUser } from '../../subscription/api/actions'
import Loading from '../../common/Loading'
import EmptyMessage from '../../common/EmptyMessage'
import CrateItem from '../../crate/Item'
import { routes } from '../../../setup/routes'

// Component
class List extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(getCratesList())
  }

  // not sure what the # is doing here on the methdod
  #onSuccessSubscription = () => {
    const { navigation, dispatch } = this.props

    dispatch(getSubscriptionListByUser(this.props.user.details.email))

    navigation.navigate(routes.account.name)
  }

  render() {
    const { isLoading, list } = this.props.crates

    return (
      <View style={styles.container}>
        {/* Below Ternary: if isLoading is true, render Loading comp, if false, ANOTHER ternary is invoked- if the there is a list and if that list is over 0, render ScrollView, otherwise render EmptyMessage */}
        {/* ScrollView seems to be coming directly from React */}

        {
          isLoading
            ? <Loading />
            : list && list.length > 0
              ? <ScrollView style={styles.itemContainer}>
                  { list.map((crate, i) => (
                    <CrateItem
                      key={crate.id}
                      crate={crate}
                      lastItem={list.length - 1 === i}
                      onSuccessSubscription={this.#onSuccessSubscription}
                    />
                  )) }
                </ScrollView>
              : <EmptyMessage message={'No crate is available at the moment'} />
        }
      </View>
    )
  }
}

// Component Properties
List.propTypes = {
  crates: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

// Component State
// This function is probably mapStateToProps?
// Sends an action with the user info and crates
// purpose is to list those crates
function listState(state) {
  return {
    crates: state.crates,
    user: state.user
  }
}

// connecting listState to store. WithNavigation might be needed with Router
export default connect(listState)(withNavigation(List))
