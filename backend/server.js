//basic dependencies//!dont chg::
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// const loggedInEmail = require("../src/globalState.js");

const UserModel = require("./models/User"); //!dont chg::

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//middleware
const cors = require("cors"); //!dont chg::
require("dotenv").config();

//use parsing middleware
app.use(bodyParser.json());
app.use(express.json()); //!dont chg::
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//database connection //!dont chg::
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useCreateIndex: true,
	})
	.then(() => {
		console.log("MongoDB Connected");
	})
	.catch((err) => {
		console.log("Unable to connect to MongoDB");
	});

const port = process.env.PORT || 5000; //!dont chg::

app.post("/createUser", async (req, res) => {
	const user = req.body;
	const check = await UserModel.findOne({
		email: req.body.email,
	});
	// if (check) {
	const newUser = new UserModel(user);
	await newUser.save();
	// } else {
	return res
		.status(400)
		.send("Email exist. Please login or use another email to sign up");
	// }
	res.json(user);
});

app.post("/login", async (req, res) => {
	const user = await UserModel.findOne({
		email: req.body.email,
	});
	if (!user) return res.status(400).send("Invalid email..");

	UserModel.find({ user }, (err, result) => {
		if (req.body.password === user.password) res.json("successfully logged in");
		else res.json("invalid email or password");
	});
});

app.delete("/delete-user", async (req, res) => {
	try {
		await UserModel.findOneAndDelete({ email: req.body.email });
		res.send({ msg: "User Deleted" });
	} catch (err) {
		res.status(500).json({ err: err.message || "Error while deleting user" });
	}
});

app.post("/update-user", async (req, res) => {
	const user = await UserModel.findOne({
		email: req.body.email,
	});
	try {
		if (user) {
			user.fullname = req.body.fullname || user.fullname;
			user.password = req.body.password || user.password;
			user.password2 = req.body.password2 || user.password2;
			user.email = req.body.email || user.email;

			// UserModel.findOneAndUpdate({})
			user.save().then((user) => {
				res.json("user updated");
			});
			// alert("svaed");
		}
	} catch (err) {
		res.status(500).json({ err: err.message || "Error while update user" });
	}

	// try {
	// 	if (
	// 		req.body.password2 !== user.password &&
	// 		(req.body.newpassword && req.body.password2) !== null
	// 	)
	// 		UserModel.findByIdAndUpdate({ password: req.body.password2 });
	// 	if (req.body.email !== user.email)
	// 		UserModel.findByIdAndUpdate({ email: req.body.email });
	// 	if (req.body.fullname !== user.fullname)
	// 		UserModel.findByIdAndUpdate({ fullname: req.body.fullname });
	// } catch (err) {
	// 	res.status(500).json({ err: err.message || "Error while update user" });
	// }
});

//starting server//!dont chg::
app.listen(port, () => {
	console.log(`Onlinedoc is running at ${port}`);
});

app.get("/", (req, res) => {
	res.send(`Onlinedoc backend server on PORT ${port}`);
});

// // const cookieSession = require("cookie-session");
// const port = process.eventNames.PORT || 5000;

// var corsOptions = {
// 	origin: "http://localhost:3000",
// };

// const db = require("./models/user_models");
// const dbconfig = require("./config/db_config");
// const Role = db.role;

// app.use(cors(corsOptions));
// // parse requests of content-type - application/json
// app.use(bodyParser.json());
// // parse requests of content-type - application/x-www-form-urlencoded
// // app.use(bodyParser.urlencoded({ extended: true }));

// // app.use(
// // 	cookieSession({
// // 		name: "Priscilla",
// // 		secret: "SECRET_COOKIE", // should use as secret environment variable
// // 		httpOnly: true,
// // 	})
// // );

// db.mongoose
// 	.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => {
// 		console.log("Successfully connect to MongoDB.");
// 		initial();
// 	})
// 	.catch((err) => {
// 		console.error("Connection error", err);
// 		process.exit();
// 	});

// function initial() {
// 	Role.estimatedDocumentCount((err, count) => {
// 		if (!err && count === 0) {
// 			new Role({
// 				name: "user",
// 			}).save((err) => {
// 				if (err) {
// 					console.log("error", err);
// 				}
// 				console.log("added 'user' to roles collection");
// 			});
// 			new Role({
// 				name: "admin",
// 			}).save((err) => {
// 				if (err) {
// 					console.log("error", err);
// 				}
// 				console.log("added 'admin' to roles collection");
// 			});
// 		}
// 	});
// }

// // routes
// require("./app/routes/authentication_routes")(app);
// require("./app/routes/user_routes")(app);
// // set port, listen for requests

// //Display log that server is running and listening to port
// app.listen(port, () => console.log(`Listening on port ${port}`));

// //create a GET route
// app.get("/", (req, res) => {
// 	res.send({ express: "Express is connected to react" });
// });

// const express = require("express");
// const app = express();
// require("dotenv").config();
// const mongoose = require("mongoose");
// // mongoose.set("useFindAndModify", false);
// const cors = require("cors");

// const signup = require("./routes/signup");
// //!SECURITY NOTE:
// /*
// *Bad Practice in real life (for assignment's sake lmao)
// Backend username password is saved tgt with user info
// althrough i specify it as 'token'.
// */

// //Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());

// //Route
// app.use("/signup", signup);

// //Port
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
// 	console.log(`Onlinedoc's Backend is listening on PORT ${PORT}`)
// );

// //MongoDB
// mongoose.connect(
// 	process.env.DATABASE,
// 	{ useNewUrlParser: true, useUnifiedTopology: true },
// 	() => console.log("Connected to MongoDB")
// );

// //REST
// app.get("/", (req, res) => {
// 	res.send(`Onlinedoc backend server on PORT ${PORT}`);
//// });
