const Joi = require("Joi");

const schema = Joi.object({
    email: Joi.string().max(255).email().required(),
    password: Joi.string().max(1024).required(),
});

const validate = (props) => {
    const { error } = schema.validate(props);
    return error === undefined;
};

module.exports = validate;
