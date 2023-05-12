const { check } = require("express-validator")

const register = [
  check("username", "Username required").not().isEmpty(),
  check("username", "Username only can contains alphabet").isAlpha("en-US", {
    ignore: " ",
  }),
  check("username", "Username maximum length is 100 characters").isLength({ max: 100 }),
  check("email", "Email required").not().isEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check("email", "Email maximum length is 50 characters").isLength({ max: 50 }),
  check("password", "Password require 8 or more characters").isLength({
    min: 8,
  }),
  check("password", "Password must include one lowercase character, one uppercase character, a number, and a special character").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
  check("password", "Password can't above 100 characters").isLength({
    max: 100,
  }),
]

const login = [check("email", "Email required").not().isEmpty(), check("email", "Please include a valid email").isEmail(), check("password", "Password required").not().isEmpty()]

module.exports = {
  register,
  login,
}
