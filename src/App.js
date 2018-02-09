import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './components/toolbar.js'
import MessageList from './components/messageList.js'
const messages = [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"]
  }, {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": []
  }, {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"]
  }, {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": []
  }, {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"]
  }, {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": []
  }, {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"]
  }, {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": []
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: props.messages
    }
  }
  toggleClass = (message, name_of_class) => {
    console.log('toggleClass clicked');
    const index = messages.indexOf(message)
    let newMsg = messages.slice(0)
    newMsg[index][name_of_class] = !newMsg[index][name_of_class]
    this.setState({messages: newMsg})
  }
  toggleStarred = (message, name_of_class) => {
    const index = messages.indexOf(message)
    let newMsg = messages.slice(0)
    newMsg[index][name_of_class] = !newMsg[index][name_of_class]
    this.setState({messages: newMsg})
  }
  toggleSelected = (message, name_of_class) => {
    console.log('toggleSelected');
    const index = messages.indexOf(message)
    let newMsg = messages.slice(0)
    newMsg[index][name_of_class] = !newMsg[index][name_of_class]
    this.setState({messages: newMsg})
  }
  toggleSelectAll = () => {
    const allSelected = messages.filter((element) => {
      // console.log(element);
      if (element.selected === true){
        return element
      }
    })
    if (allSelected.length < messages.length) {
      return (messages.map((element) => {
        element.selected = true
        let newMsg = messages.slice(0, messages.length)

        this.setState({messages: newMsg})
      }))
    } else {
      return (messages.map((element) => {
        element.selected = false
        let newMsg = messages.slice(0, messages.length)
        this.setState({messages: newMsg})
      }))
    }
  }
  checkSelectBox = () => {
    let newMsg = messages.slice(0)
    newMsg.filter((element) => {
      if (element.selected === true){
        return element
      }
    })
    console.log(newMsg);
    if (newMsg.length === 0){
      return 'fa fa-square-o'
    }
    if (newMsg.length < messages.length && newMsg.length > 0){
      return 'fa fa-minus-square-o'
    }
    if (newMsg.length === messages.length){
      return 'fa fa-checked-square-o'
    }
  }
  markSelectedRead = () => {
    const selected = messages.filter((element) => {
      if (element.selected === true) {return element}
    })
  }
render() {
  return (<div className="App">
    <Toolbar toggleSelectAll={this.toggleSelectAll}
    setButtonState={this.checkSelectBox}
    />
    <MessageList messages={messages} toggleClass={this.toggleClass} toggleStarred={this.toggleStarred} toggleSelected={this.toggleSelected}/>
  </div>);
}
}

export default App;
