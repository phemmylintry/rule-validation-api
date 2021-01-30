import * as helpers from './helpers'
import * as res from "express";
// import {fieldsCheck, is_json_valid, isValidArray, isValidString} from "./helpers";

export async function getProfilers() {
    return {
        message: "My Rule-Validation API",
        status: "success",
        data: {
            name: "Oluwafemi Adenuga",
            github: "@phemmylintry",
            email: "stephenadenuga0@gmail.com",
            mobile: "07062257651",
            twitter: "@realfemiadenuga"
        }
    }
}

export async function validateRequest(body) {
    // If a required field isn't passed. Your endpoint should return with a response (HTTP 400 status code) that is similar to the below:
    if (Object.entries(body).length === 0) {
        let statusCode = 400
        return {
            statusCode,
            message: "rule and data fields are required.",
            status: statusCode === 200 ? "success" : "error",
            data: null
        }
    }

    if (typeof(body.rule) === 'undefined') {
        let statusCode = 400
        return {
            statusCode,
            message: "rule fields are required.",
            status: statusCode === 200 ? "success" : "error",
            data: null
        }
    }
    if (typeof(body.data) === 'undefined') {
        let statusCode = 400
        return {
            statusCode,
            message: "data fields are required.",
            status: statusCode === 200 ? "success" : "error",
            data: null
        }
    }

    const {rule, data} = body

    // If a field is of the wrong type, your endpoint should return with a response (HTTP 400 status code) that is similar to the below:
    if (Object.entries(body).length === 2) {
        let statusCode = 400
        if (!(helpers.is_json_valid(rule))) {
            return {
                statusCode,
                message: "rule should be an object.",
                status: statusCode === 200 ? "success" : "error",
                data: null
            }
        }
        if (!(helpers.is_json_valid(data) || helpers.isValidArray(data) || helpers.isValidString(data) )) {
            return {
                statusCode,
                message: "data should be a object | array | string.",
                status: statusCode === 200 ? "success" : "error",
                data: null
            }
        }
        // If an invalid JSON payload is passed to your API, your endpoint response (HTTP 400 status code) should be:
        if (!(helpers.is_json_valid(body))) {
            let statusCode = 400
            return {
                statusCode,
                message: "Invalid JSON payload passed.",
                status: statusCode === 200 ? "success" : "error",
                data: null
            }
        }

        // If the field specified in the rule object is missing from the data passed, your endpoint response (HTTP 400 status code) should be:
        if (!(helpers.fieldsCheck(rule.field, data))) {
            let statusCode = 400
            return {
                statusCode,
                message: `field ${rule.field} is missing from data.`,
                status: statusCode === 200 ? "success" : "error",
                data: null

            }
        }

        // If the rule is successfully validated, your endpoint response (HTTP 200 status code) should be:
        if (helpers.condition(rule, data[rule.field])) {
            let statusCode = 200
            return {
                statusCode,
                message: `field ${rule.field} successfully validated.`,
                status: statusCode === 200 ? "success" : "error",
                data: {
                    validation: {
                        error: false,
                        field: `${rule.field}`,
                        field_value: `${rule.field_value}`,
                        condition: `${rule.condition}`,
                        condition_value: `${rule.condition_value}`
                    }
                }
            }
        } else {
            let statusCode = 400
            return {
                statusCode,
                message: `field ${rule.field} failed validation.`,
                status: statusCode === 200 ? "success" : "error",
                data: {
                    validation: {
                        error: true,
                        field: `${rule.field}`,
                        field_value: `${rule.field_value}`,
                        condition: `${rule.condition}`,
                        condition_value: `${rule.condition_value}`
                    }
                }
            }
        }
    }
}

// if (!!fieldsCheck(rule.field, req.body.data)) {
//     return res.status(400).json({
//         message: `field ${rule.field} is missing from data.`,
//         status: "error",
//         data: null
//     })
// }
