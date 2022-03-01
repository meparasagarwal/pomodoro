import React from 'react'

function Form(props) {
  const {changeHandler,focusTime,breakTime,startTimer,reset} = props;
  return (
    <div>
        <label>Enter Focus Time : </label>
          <input type="number" value={focusTime} name="focusTime" onChange={changeHandler}></input>
          <br></br>
          <label>Enter Break Time : </label>
          <input type="number" value={breakTime} name="breakTime" onChange={changeHandler}></input>
          <button onClick={startTimer}><span className="text">Start</span></button>
          <button onClick={reset}><span className="text"><i className="fa fa-refresh" aria-hidden="true"></i></span></button>
    </div>
  )
}

export default Form