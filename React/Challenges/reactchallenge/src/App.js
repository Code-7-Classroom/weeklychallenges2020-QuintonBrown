import React from 'react';
import logo from './logo.svg';
import './App.css';
import Basicinfo from './Components/Basicinfo'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      person:[
        {
          name: "Trevor",
          number: 7049384958,
          DOB: "7/23/2013"
        },
        {
          name: "Mike",
          number: 7049387384,
          DOB: "3/13/1995"
        },
        {
          name: "John",
          number: 7049383847,
          DOB: "5/2/2004"
        }
      ]
    }
  
  }


render() {
  return (
    <div>
      {this.state.person.map(info => {
        return <Basicinfo data={info} />
      })}
      {/* where Basicinfo will live  */}
      {/* <Basicinfo data={this.state.person} /> */}
    </div>
  )
}
}

export default App;
