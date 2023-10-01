import logo from "./logo.svg";
import "./App.css";
import SellerModule from "./seller/sellerapp";
import { Route, Router, Routes } from "react-router-dom";
import UserModule from "./user/userapp";

function App() {
	let login = true;
	if (login) return <SellerModule />;
	else return <UserModule />;
}

export default App;
