import React from 'react'
import ReactDOM from 'react-dom'

import TodayBirthdayList from '../lists/today/index'

import axios from 'axios';
var dateFormat = require('dateformat');

export default class NameDateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      csrfToken: document.getElementsByName("csrf-token")[0].content,
      newUser: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let today = new Date();
    var self = this;

    axios({
        method: 'POST',
        params: {
          authenticity_token: this.state.csrfToken
        },
        url: "/users.json",
        data: {
          name: event.target.userName.value,
          birthday: event.target.userBirthday.value
        }
      })
      .then(function (response) {
        let user = response.data.user
        let today = new Date();
        let clientMonth = today.getMonth()+1
        if (
          user.birthday_month == clientMonth
          && user.birthday_day == today.getDate()
        ){
          alert("Happy birthday!!!");
          self.setState({newUser: [response.data.user]})
        }else {
          alert(`Your birthday, ${user.full_birthday}, was saved`)
        }

      })
      .catch(function (error) {
        console.log("Error for post request", error);
      });

  }

  render(){
    return(
      <main>
        <p>Enter your birthday</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="userName" required/>
          <input type="date" name="userBirthday" required
            max={dateFormat(new Date(), "isoDate")}/>
          <input type="submit" />
        </form>
        <TodayBirthdayList updateUser={this.state.newUser}/>
      </main>
    )
  }
}
