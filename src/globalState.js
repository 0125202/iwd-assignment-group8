//this is a bad practice
import { Store } from "pullstate";

export const LogInState = new Store({
	isLoggedIn: false,
	loggedInEmail: "",
	loggedInPw: "",
	loggedInName: "",
	loginFailed: false,
});
