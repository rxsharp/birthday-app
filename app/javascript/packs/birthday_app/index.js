import React from 'react'
import ReactDOM from 'react-dom'
import NameDateForm from './form/index.js'

class Dashboard extends React.Component {

  render(){
    return(
      <div style={{textAlign: 'center'}}>
        <NameDateForm />
      </div>
    );
  }
}



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard/>,
    document.body.appendChild(document.createElement('div')),
  )
})
