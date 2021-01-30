"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.is_json_valid = is_json_valid;
exports.isValidArray = isValidArray;
exports.isValidString = isValidString;
exports.fieldsCheck = fieldsCheck;
exports.condition = condition;
exports.formatValidationResponse = exports.formatError = void 0;

require("regenerator-runtime/runtime");

function is_json_valid(json) {
  return toString.call(json) === '[object Object]';
}

function isValidArray(array) {
  return Array.isArray(array);
}

function isValidString(string) {
  return typeof string === 'string';
}

function fieldsCheck(ruleField, dataFields) {
  return dataFields.hasOwnProperty(ruleField);
}

function condition(rule, fieldValue) {
  var condition = rule.condition,
      condition_value = rule.condition_value; // console.log(condition === 'eq')
  // console.log(condition_value)

  if (condition === 'eq') return fieldValue === condition_value;
  if (condition === 'neq') return fieldValue !== condition_value;
  if (condition === 'gt') return fieldValue > condition_value;
  if (condition === 'gte') return fieldValue >= condition_value;
  if (condition === 'contains') return fieldValue.contains(condition_value);
}

var formatError = function formatError(message) {
  return {
    statusCode: 400,
    error: true,
    message: message,
    data: null
  };
};

exports.formatError = formatError;

var generateStatusMessage = function generateStatusMessage(field, statusCode) {
  return "field ".concat(field, " ").concat(statusCode === 200 ? "successfully validated" : "failed validation", ".");
};

var formatValidationResponse = function formatValidationResponse(payload) {
  var statusCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var field = payload.field,
      fieldValue = payload.fieldValue,
      condition = payload.condition,
      condition_value = payload.condition_value;
  return {
    statusCode: statusCode,
    message: generateStatusMessage(field, statusCode),
    status: statusCode === 200 ? "success" : "error",
    data: {
      validation: {
        error: statusCode === 200,
        field: field,
        field_value: fieldValue,
        condition: condition,
        condition_value: condition_value
      }
    }
  };
};

exports.formatValidationResponse = formatValidationResponse;