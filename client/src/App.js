import React from 'react';

import {BroswerRouter as Router, Route} from 'react-router-dom'

import Join from './components/Join'
import Chat from './components/Chat'



const App = ()=>(
	<Router>
		<Router path='/' exact component={Join}/>
		<Router path='/chat' component={Chat}/>
	</Router>
);


export default App;