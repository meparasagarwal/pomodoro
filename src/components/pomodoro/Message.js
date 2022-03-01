import React from 'react'

function Message(props) {
  return (
    <div className='message'>
        {props.isBreak ? <h2>Break Time:Take a Sip</h2>:<h2>Work Time : Break Time starts in</h2>}
    </div>
  )
}

export default Message