import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'
import { useLocation } from 'react-router-dom';


let socket;

const Chat = () => {
	const location = useLocation();
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const ENDPOINT = 'localhost:4000';
	
	useEffect(() =>{
		const {name , room} = queryString.parse(location.search);

		socket = io(ENDPOINT)

		setName(name);
		setRoom(room);

		return () => {
			socket.disconnect();
		      };
		    }, [location.search]);


return (
	<div>
	<h1>Chat</h1>
	</div>
);
};

export default Chat;