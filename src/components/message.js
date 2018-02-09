import React from 'react'

const message = ({message, toggleClass, toggleStarred, toggleSelected}) => {
  const isRead = message.read
    ? 'read'
    : 'unread';
  const expanded = () => {
    if (isRead === 'read') {
      return (<div className="row message-body">
        <div className="col-xs-11 col-xs-offset-1">
          This is the body of the message.
        </div>
      </div>)
    }
  }
  const isStarred = message.starred
    ? 'star fa fa-star-o'
    : 'star fa fa-star';
  const isSelected = message.selected
    ? "messages selected"
    : "";
  const isChecked = message.selected
    ? "checked"
    : "";
  return (<div className="app">
    <div className={`row message ${isRead} ${isSelected}`} onClick={() => {
        toggleClass(message, "read")
      }}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" checked={`${isChecked}`} onChange={() => {
                toggleSelected(message, "selected")
              }}/>
          </div>
          <div className="col-xs-2">
            <i className={`${isStarred}`} onClick={() => {
                toggleStarred(message, "starred")
              }}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {
          message.labels.map((element) => {
            return <span className="label label-warning">{element}</span>
          })
        }
        <a href="#" >
          {message.subject}
        </a>
      </div>
    </div>
    <div>{expanded()}</div>
  </div>)
}

export default message
