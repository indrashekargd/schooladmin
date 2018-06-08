import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import MainTemplate from './pages/MainTemplate';
import Employees from './pages/Employees';
import Departments from './pages/Departments';
import Meetings from './pages/Meetings';
import Students from './pages/Students';
import Standards from './pages/Standards';
import Routes from './pages/Routes';
import Boardingstops from './pages/Boardingstops';
import Caretakers from './pages/Caretakers';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={MainTemplate}>
			<Route path="employees" components={{main: Employees}} />
			<Route path="departments" components={{main: Departments}} />
			<Route path="meetings" components={{main: Meetings}} />
			<Route path="students" components={{main: Students}} />
			<Route path="standards" components={{main: Standards}} />
			<Route path="routes" components={{main: Routes}} />
			<Route path="boardingstops" components={{main: Boardingstops}} />
			<Route path="caretakers" components={{main: Caretakers}} />
		</Route>
	</Router>,
	document.getElementById('root')
);
