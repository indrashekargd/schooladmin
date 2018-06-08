import React from 'react';
import { Link } from 'react-router';

var Header = React.createClass({
	render: function() {
		
		return (
			<div className="header">
				<p className="header-info">
					Employee Management Dashboard
				</p>
				<div className="menu">
					<Link to="/employees" className="menu-link-item" activeClassName="active">Employees</Link>
					<Link to="/departments" className="menu-link-item" activeClassName="active">Departments</Link>
					<Link to="/meetings" className="menu-link-item" activeClassName="active">Meetings</Link>
					<Link to="/students" className="menu-link-item" activeClassName="active">Students</Link>
					<Link to="/standards" className="menu-link-item" activeClassName="active">Class</Link>
					<Link to="/routes" className="menu-link-item" activeClassName="active">Route Map</Link>
					<Link to="/caretakers" className="menu-link-item" activeClassName="active">Caretakers</Link>
					<Link to="/boardingstops" className="menu-link-item" activeClassName="active">Boarding Stops</Link>
				</div>
			</div>

		);
	}
});

export default Header;