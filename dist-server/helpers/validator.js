"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProfilers = getProfilers;
exports.validateRequest = validateRequest;

var helpers = _interopRequireWildcard(require("./helpers"));

var res = _interopRequireWildcard(require("express"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import {fieldsCheck, is_json_valid, isValidArray, isValidString} from "./helpers";
function getProfilers() {
  return _getProfilers.apply(this, arguments);
}

function _getProfilers() {
  _getProfilers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              message: "My Rule-Validation API",
              status: "success",
              data: {
                name: "Oluwafemi Adenuga",
                github: "@phemmylintry",
                email: "stephenadenuga0@gmail.com",
                mobile: "07062257651",
                twitter: "@realfemiadenuga"
              }
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getProfilers.apply(this, arguments);
}

function validateRequest(_x) {
  return _validateRequest.apply(this, arguments);
} // if (!!fieldsCheck(rule.field, req.body.data)) {
//     return res.status(400).json({
//         message: `field ${rule.field} is missing from data.`,
//         status: "error",
//         data: null
//     })
// }


function _validateRequest() {
  _validateRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(body) {
    var statusCode, _statusCode, _statusCode2, rule, data, _statusCode3, _statusCode4, _statusCode5, _statusCode6, _statusCode7;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(Object.entries(body).length === 0)) {
              _context2.next = 3;
              break;
            }

            statusCode = 400;
            return _context2.abrupt("return", {
              statusCode: statusCode,
              message: "rule and data fields are required.",
              status: statusCode === 200 ? "success" : "error",
              data: null
            });

          case 3:
            if (!(typeof body.rule === 'undefined')) {
              _context2.next = 6;
              break;
            }

            _statusCode = 400;
            return _context2.abrupt("return", {
              statusCode: _statusCode,
              message: "rule fields are required.",
              status: _statusCode === 200 ? "success" : "error",
              data: null
            });

          case 6:
            if (!(typeof body.data === 'undefined')) {
              _context2.next = 9;
              break;
            }

            _statusCode2 = 400;
            return _context2.abrupt("return", {
              statusCode: _statusCode2,
              message: "data fields are required.",
              status: _statusCode2 === 200 ? "success" : "error",
              data: null
            });

          case 9:
            rule = body.rule, data = body.data; // If a field is of the wrong type, your endpoint should return with a response (HTTP 400 status code) that is similar to the below:

            if (!(Object.entries(body).length === 2)) {
              _context2.next = 29;
              break;
            }

            _statusCode3 = 400;

            if (helpers.is_json_valid(rule)) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return", {
              statusCode: _statusCode3,
              message: "rule should be an object.",
              status: _statusCode3 === 200 ? "success" : "error",
              data: null
            });

          case 14:
            if (helpers.is_json_valid(data) || helpers.isValidArray(data) || helpers.isValidString(data)) {
              _context2.next = 16;
              break;
            }

            return _context2.abrupt("return", {
              statusCode: _statusCode3,
              message: "data should be a object | array | string.",
              status: _statusCode3 === 200 ? "success" : "error",
              data: null
            });

          case 16:
            if (helpers.is_json_valid(body)) {
              _context2.next = 19;
              break;
            }

            _statusCode4 = 400;
            return _context2.abrupt("return", {
              statusCode: _statusCode4,
              message: "Invalid JSON payload passed.",
              status: _statusCode4 === 200 ? "success" : "error",
              data: null
            });

          case 19:
            if (helpers.fieldsCheck(rule.field, data)) {
              _context2.next = 22;
              break;
            }

            _statusCode5 = 400;
            return _context2.abrupt("return", {
              statusCode: _statusCode5,
              message: "field ".concat(rule.field, " is missing from data."),
              status: _statusCode5 === 200 ? "success" : "error",
              data: null
            });

          case 22:
            if (!helpers.condition(rule, data[rule.field])) {
              _context2.next = 27;
              break;
            }

            _statusCode6 = 200;
            return _context2.abrupt("return", {
              statusCode: _statusCode6,
              message: "field ".concat(rule.field, " successfully validated."),
              status: _statusCode6 === 200 ? "success" : "error",
              data: {
                validation: {
                  error: false,
                  field: "".concat(rule.field),
                  field_value: "".concat(rule.field_value),
                  condition: "".concat(rule.condition),
                  condition_value: "".concat(rule.condition_value)
                }
              }
            });

          case 27:
            _statusCode7 = 400;
            return _context2.abrupt("return", {
              statusCode: _statusCode7,
              message: "field ".concat(rule.field, " failed validation."),
              status: _statusCode7 === 200 ? "success" : "error",
              data: {
                validation: {
                  error: true,
                  field: "".concat(rule.field),
                  field_value: "".concat(rule.field_value),
                  condition: "".concat(rule.condition),
                  condition_value: "".concat(rule.condition_value)
                }
              }
            });

          case 29:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _validateRequest.apply(this, arguments);
}