import React from 'react';

import {BroswerRouter as Router, Route} from 'react-router-dom'


const App = ()=>(
	<Router>
		<Router path='/' exact component={Join}/>
	</Router>
);