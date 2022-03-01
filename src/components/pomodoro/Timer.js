import React from 'react'
import {displayMinutes,displaySeconds} from './pomodoro.helper.js';
function Timer(props) {
  return (
    <h1 className="timer">{displayMinutes(props.focusTime)}:{displaySeconds(props.seconds)}</h1>
  )
}

export default Timer