import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
	return (
		<div>
			<Nav className="bg-dark">
				<NavItem>
					<NavLink>
						<Link to="/">SOCIAL SCIENCE</Link>
					</NavLink>
				</NavItem>
			</Nav>
		</div>
	);
};

export default Navigation;
