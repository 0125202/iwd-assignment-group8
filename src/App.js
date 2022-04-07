import React, { useContext, useEffect, useHistory, useReducer } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import AboutUs from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import ScrollToTop from "./components/ScrollToTop";
import UserContext from "./globalState";
import ProfilePg from "./components/pages/ProfilePg";
import Flu from "./components/pages/Flu";
import Period from "./components/pages/Period";
import Skin from "./components/pages/Skin";
import Fever from "./components/pages/Fever";
import DocDetails from "./components/pages/DocDetails";
import Collab from "./components/pages/Collab";
import Feedback from "./components/pages/Feedback";
import Article from "./components/pages/Article";

function App() {
	// const [logged, setLogged] = useReducer(reducer, []);
	return (
		<>
			<Router>
				<NavigationBar />
				<ScrollToTop />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/home" exact element={<Home />} />
					<Route path="/services" exact element={<Services />} />
					<Route path="/about-us" exact element={<AboutUs />} />
					<Route path="/profile" exact element={<ProfilePg />} />
					<Route path="/sign-up" exact element={<SignUp />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/flu-services" exact element={<Flu />} />
					<Route path="/period-services" exact element={<Period />} />
					<Route path="/skin-services" exact element={<Skin />} />
					<Route path="/fever-services" exact element={<Fever />} />
					<Route path="/doc-details" exact element={<DocDetails />} />
					<Route path="/collaboration-info" exact element={<Collab />} />
					<Route path="/feedback" exact element={<Feedback />} />
					<Route path="/article" exact element={<Article />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
