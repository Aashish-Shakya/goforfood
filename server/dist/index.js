"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const goforfood = (0, _express.default)();
goforfood.use(_express.default.json());
goforfood.get("/", (req, res) => {
  res.json({
    message: "Server is running"
  });
});
goforfood.listen(5000, () => {
  console.log("Server is running !!!");
});