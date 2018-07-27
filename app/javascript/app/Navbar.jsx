import React from "react";

const Navbar = ({ daysElapsed }) => (
	<nav className="navbar">
		<div className="container">
			<h1 className="logo">Stock</h1>
			<span className="days-elapsed">Days elapsed: {daysElapsed}</span>
			<div className="clearfix" />
		</div>
	</nav>
);

export default Navbar;
