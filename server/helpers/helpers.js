import 'regenerator-runtime/runtime';

export function is_json_valid(json) {
    return toString.call(json) === '[object Object]'
}

export  function isValidArray(array) {
    return Array.isArray(array)
}

export function isValidString(string) {
    return typeof string === 'string'
}

export function fieldsCheck(ruleField, dataFields) {
    return dataFields.hasOwnProperty(ruleField)
}

export function condition(rule, fieldValue) {
    const { condition, condition_value } = rule
    // console.log(condition === 'eq')
    // console.log(condition_value)

    if (condition === 'eq') return fieldValue === condition_value
    if (condition === 'neq') return fieldValue !== condition_value
    if (condition === 'gt') return fieldValue > condition_value
    if (condition === 'gte') return fieldValue >= condition_value
    if (condition === 'contains') return fieldValue.contains(condition_value)
}

export const formatError = (message) => ({
    statusCode: 400,
    error: true,
    message,
    data: null,
});


const generateStatusMessage = (field, statusCode) => {
    return `field ${field} ${
        statusCode === 200 ? "successfully validated" : "failed validation"
    }.`;
};

export const formatValidationResponse = (payload, statusCode = 200) => {
    const { field, fieldValue, condition, condition_value } = payload;

    return {
        statusCode,
        message: generateStatusMessage(field, statusCode),
        status: statusCode === 200 ? "success" : "error",
        data: {
            validation: {
                error: statusCode === 200,
                field: field,
                field_value: fieldValue,
                condition: condition,
                condition_value: condition_value,
            },
        },
    };
};
