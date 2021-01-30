"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _middlewares = _interopRequireDefault(require("./middlewares/middlewares"));

var _routes = _interopRequireDefault(require("./routes/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import handlers from './routes/handlers'
var port = process.env.PORT || 1337; // App instance variables

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])()); // app.use(express.static(path.join(__dirname, '../public')));

app.get('/', _routes["default"].details);
app.post('/validate-rule', _routes["default"].validateRule);
app.use(_middlewares["default"].handleError);
app.use(_middlewares["default"].notFound);
app.listen(port, function () {
  console.log("Server started on port ".concat(port));
});
var _default = app;
exports["default"] = _default;