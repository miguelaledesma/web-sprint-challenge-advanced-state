import React from 'react'
import { connect } from 'react-redux'
import * as type from '../state/action-creators'

export function Message(props) {
  const { message } = props
  return <div id="message">{message}</div>
}



export default connect(state => state, type)(Message)
