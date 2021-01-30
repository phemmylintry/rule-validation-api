import 'regenerator-runtime/runtime';
import autoCatch from "../lib/auto-catch";
import * as validate from '../helpers/validator'

export default autoCatch({
    details,
    validateRule
})


async function details(req, res) {
    const profile = await validate.getProfilers()
    res.json(profile)
}

async function validateRule(req, res) {
    const result = await validate.validateRequest(req.body)

    const { statusCode } = result
    delete result.statusCode
    return res.status(statusCode).json(result)
}
