import React from 'react'
import './Input.css';

const Input = ({message,setMessage, sendMessage }) =>(
<form className="form">
	<input
		className='input'
		type='text'
		placeholder='Type here...'
		value={message}
		onChange={(event) => setMessage(event.target.value)}
		onKeyPress={event => event.key === 'Enter' ? setMessage(event) : null}
	/>
	<button className='sendButton' onClick={(event) => sendMessage(event)}>Send</button>
	</form>
)

export default Input;