import React from "react";
import { Link } from "react-router-dom";

const Sellerheader = () => {
	return (
		<header>
			<Link to="/" className="me-5">
				Dashboard
			</Link>
			<Link to="/order" className="me-5">
				Manage Orders
			</Link>
			<Link to="/newproduct" className="me-5">
				New Inventory
			</Link>
			<Link to="/productlist" className="me-5">
				Manage Inventory
			</Link>
			<a>Welcome - Seller 1 Logout</a>
		</header>
	);
};

export default Sellerheader;
