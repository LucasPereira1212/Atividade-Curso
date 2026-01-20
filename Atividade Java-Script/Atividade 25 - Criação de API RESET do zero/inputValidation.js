import Joi from "joi";

const driverSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  team: Joi.string().min(3).max(50).required(),
  points: Joi.number().min(0).max(1000).default(0),
});

const updateSchema = Joi.object({
  name: Joi.string().min(3).max(50),
  team: Joi.string().min(3).max(50),
  points: Joi.number().min(0).max(1000),
}).min(1);

function validation(schema) {
  return function validateInfo() {
    return schema.validate(info, { abortEarly: false });
  };
}

const generatePositionSchema = (maxValue) => Joi.number().min(1).max(maxValue);

export const validateDriverInfo = validation(driverSchema);
export const validateUpdateDriverInfo = validation(updateSchema);
export const validatePosition = (position, maxValue) => {
  return generatePositionSchema(maxValue).validate(position);
};
