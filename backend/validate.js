const Joi = require("joi");


const registerValidate = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(8),
  });

  return schema.validate(data)
};
const loginValidate = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(8),
  });

  return schema.validate(data)
};



module.exports.registerValidate = registerValidate;
module.exports.loginValidate = loginValidate;