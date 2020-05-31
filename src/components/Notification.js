import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const { notification } = props
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  let content;

  if (notification === '' || notification === 'You voted ' || notification === 'You created ') {
    content = null
  } else {
    content = (
      <div style={style}>
        {notification}
      </div>
    )
  }

  return content
}

const mapStateToProps = (state) => {
  return {
    notification: state.notificationReducer,
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification