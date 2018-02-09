import React from 'react'
import Message from './message.js'

const messageList = ({messages, toggleClass, toggleStarred, toggleSelected}) => {
  return (
  <div>
    {messages.map(message => (
      <Message key={message.id}
      message = {message}
      toggleClass = {toggleClass}
      toggleStarred = {toggleStarred}
      toggleSelected = {toggleSelected}
    />))}
  </div>)
}

export default messageList
