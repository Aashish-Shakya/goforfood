"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _passport = _interopRequireDefault(require("passport"));
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
var _expressFileupload = _interopRequireDefault(require("express-fileupload"));
var _route = _interopRequireDefault(require("./config/route.config"));
var _connection = _interopRequireDefault(require("./database/connection"));
var _auth = _interopRequireDefault(require("./api/auth"));
var _food = _interopRequireDefault(require("./api/food"));
var _user = _interopRequireDefault(require("./api/user"));
var _order = _interopRequireDefault(require("./api/order"));
var _cloudinary = require("cloudinary");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//Private route authrization config

//Db connection 

// Require the cloudinary library

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
_dotenv.default.config();
(0, _route.default)(_passport.default);
const goforfood = (0, _express.default)();
goforfood.use(_express.default.json());
goforfood.get("/", (req, res) => {
  res.json({
    message: "Server is running"
  });
});
///auth/signup
goforfood.use("/auth", _auth.default);
goforfood.use("/food", _food.default);
goforfood.use("/user", _user.default);
goforfood.use("/order", _order.default);
goforfood.use((0, _expressFileupload.default)({
  debug: true,
  useTempFiles: true,
  tempFileDir: _path.default.join(__dirname, "./temp")
}));
const PORT = 6000;
goforfood.listen(PORT, () => {
  (0, _connection.default)().then(() => {
    console.log("Server is running with DB !!!");
  }).catch(error => {
    console.log("Server is running, but database connection failed...");
    console.log(error);
  });
});