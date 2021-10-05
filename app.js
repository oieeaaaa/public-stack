/**
 * BigCommerce Express Hello World App
 *
 * A simple Express app to quickly demonstrate
 * single-click app OAuth flow.
 *
 * Note: not intended for production use.
 **/

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// App Routes ============================================
var auth = require("./routes/auth");
var load = require("./routes/load");
var uninstall = require("./routes/uninstall");
// ========================================================

var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "dist")));
app.set("views", __dirname + "/views");
app.use("/", indexRouter);
app.use("/users", usersRouter);

// App Routes ============================================+
app.use("/auth", auth);
app.use("/load", load);
app.use("/uninstall", uninstall);
// ========================================================

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
