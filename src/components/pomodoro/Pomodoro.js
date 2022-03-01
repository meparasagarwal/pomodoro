import React, { Component } from 'react'
import Message from './Message';
import './pomodoro.css'
import {backgroundClass,controlTime} from './pomodoro.helper.js';
import Timer from './Timer';
import Form from './Form';
class Pomodoro extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       focusTime:25,
       seconds:0,
       isBreak:false,
       isHandled:false,
       breakTime:5,
       repeatTime:25
    }
  }
  interval
  componentDidUpdate(){
      const {focusTime,seconds,isBreak,isHandled,breakTime,repeatTime}=this.state
      
      if(isHandled){
      this.interval = setInterval(()=>{
          clearInterval(this.interval);
          const value=controlTime(focusTime,seconds,isBreak,breakTime,repeatTime);
          this.setState(value);
      },1000)
      }else{
        clearInterval(this.interval);
      }
  }
  startTimer = () =>{
      this.setState({
          seconds:0,
          isHandled:true,
          repeatTime:this.state.focusTime
      });
  }
  reset = () => {
    clearInterval(this.interval);
    this.setState({
        focusTime:25,
        seconds:0,
        isBreak:false,
        isHandled:false,
        repeatTime:25
    });
  }
  changeHandler = (e) =>{
      this.setState({
          [e.target.name]:e.target.value,
          seconds:0,
          isHandled:false,
          isBreak:false,
          repeatTime:e.target.value
      })
  }
  render() {
    const {focusTime,seconds,isBreak,breakTime}=this.state;
    
    return (
      <div className={backgroundClass(isBreak)}>
          <Message isBreak={isBreak}/>
          <Timer focusTime={focusTime} seconds={seconds}/>
          <Form changeHandler={this.changeHandler} focusTime={focusTime} breakTime={breakTime} startTimer={this.startTimer} reset={this.reset} />
      </div>
    )
  }
}

export default Pomodoro