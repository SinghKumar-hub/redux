import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: ''
    }
  }
  // state={
  //  age:21
  // }

  // oneAgeUP=()=>{
  //   this.setState({
  //     ...this.state,age:++this.state.age
  //   })
  // }
  // oneAgeDown=()=>{
  //   this.setState({
  //     ...this.state,age:--this.state.age
  //   })
  // }
  _changeUserInput=(event)=> {
    this.setState({
      userName: event.target.value
    })
    this.props.oneAgeUP(this.state.userName)
  }
  render() {

    return (
      <div className="App">
        <div>
          Age:<span>{this.props.age}</span>
        </div>
      Name:  <input type="text" value={this.state.userName} onChange={this._changeUserInput} /><br/><br/>
        <button onClick={this.props.oneAgeUP}>buttton up</button>
        <button onClick={this.props.oneAgeDown}>buttton down</button>
        <br />
        <div>
          History
     </div>
     <div><h2>name</h2></div>
            <div><pre>{JSON.stringify(this.props.userName, null, 2) }</pre></div>
        {/* <ul>
          {
            this.props.userName.map(el => (
              <li>
                {el.userName}
              </li>

            ))
          }
        </ul> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history,
    userName:state.userName
  }
};
const mapDispatchToProps = (dispach) => {
  return {
    oneAgeUP: (upadateUserName) => dispach({
      type: 'Age_UP',
      val: upadateUserName
    }),
    oneAgeDown: () => dispach({
      type: 'Age_DOWN',
      val: 1
    })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
