const { check } = require('express-validator');

const fetchValidationRules = () => [
    check('user')
        .exists()
        .withMessage('User Field is required')
        .bail()
        .isString()
        .withMessage('User Field should be string'),
];

export default fetchValidationRules;
