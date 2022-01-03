import { validationResult } from 'express-validator';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push(err.msg));

    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: ReasonPhrases.UNPROCESSABLE_ENTITY,
        errors: extractedErrors,
    });
};

export default validate;
