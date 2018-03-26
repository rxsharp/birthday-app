import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios';

export default class TodayBirthdayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      newUser: []
    };
  }
  componentDidMount() {
    var users = [];
    axios.get(`/birthdays/today.json`)
      .then(res => {
        const users = res.data
        this.setState({ users });
      });
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.updateUser[0] !== undefined){
      let updatedPropID = nextProps.updateUser[0].id
      let firstUserID = this.state.users[0].id

      if (updatedPropID !== firstUserID){
          let newUser = nextProps.updateUser[0]
          var newState = Object.assign({}, this.state); // Clone the state obj in newState
          newState.users.unshift(newUser);
          this.setState(newState);
      }
    }else{
      this.setState({newUser: nextProps.updateUser});
    }
  }

  render(){
    var renderedElements = this.state.users.map(obj =>
      <p key={obj.id}>
      {(obj.age == 0) ? `${ obj.name } was just born today`
      : `${obj.name} is now ${obj.age} years old`}
      </p>
    )

    return(
    <div>
      <p>Today's birthdays</p>

      {renderedElements}
    </div>
    )
  }
}
