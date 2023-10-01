import React from "react";
import Mydashboard from "./dashboard";
import Myproducts from "./newproduct";
import Myorder from "./newproduct";
import Newproduct from "./newproduct";
import { HashRouter, Route, Routes } from "react-router-dom";
import Sellerheader from "./sellerheader";

const SellerModule = () => {
	return (
		<div>
			{/* <h1 className="text-center"> This is Seller Module</h1> */}
			<HashRouter>
				<Sellerheader />
				<Routes>
					<Route exact path="/" element={<Mydashboard />} />
					<Route exact path="/productlist" element={<Myproducts />} />
					<Route exact path="/newproduct" element={<Newproduct />} />
					<Route exact path="/order" element={<Myorder />} />
				</Routes>
			</HashRouter>
		</div>
	);
};

export default SellerModule;
