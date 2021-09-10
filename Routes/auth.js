const express = require("express");
const { check, body } = require("express-validator/check");
const passport = require("passport");

const router = express.Router();

const db = require("../util/database");

const authController = require("../controllers/auth");
const shopController = require("../controllers/shop");

router.get("/login", authController.getLogin);

router.get("/signUp", authController.getSignUp);

router.get("/login-success", shopController.getIndex);

router.get("/login-failure", (req, res, next) => {
  let email = require("../AuthInfo").getEmail();
  res.render("auth/login", {
    errorMessage: "Invalid Password",
    oldInput: {
      email: email,
      password: "",
    },
  });
});

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        // if (value === 'test@test.com') {
        //   throw new Error('This email address if forbidden.');
        // }
        // return true;
        // console.log("tt1", value);

        return db
          .execute(`SELECT * FROM users WHERE email = ?`, [value])
          .then((result) => {
            console.log("tt");
            if (result[0].length > 0)
              return Promise.reject(
                "E-Mail exists already, please pick a different one."
              );
          });
      })
      .normalizeEmail(),
    body(
      "password",
      "Please enter a password with only numbers and text and at least 5 characters."
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body("confirmPassword")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Passwords have to match!");
        }
        return true;
      }),
  ],
  authController.postSignup
);

router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email address.")
      .normalizeEmail(),
    body("password", "Password has to be valid.")
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
  ],
  authController.postLogin,
  passport.authenticate("local", {
    failureRedirect: "/login-failure",
    successRedirect: "/login-success",
  })
);

module.exports = router;
