const User = require("../models/users.models");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const jwt_secret = process.env.JWT_SECRET;
//  {
//     username: form.username,
//     email: form.email,
//     password: form.password,
//     password2: form.password2
//  }
const register = async (req, res) => {
  const salt = '321dsa'
  const { username, email, password, password2 } = req.body;
  if (!username || !email || !password || !password2){
    return res.json({ ok: false, message: "All fields required" });
  }
  if (password !== password2){
    return res.json({ ok: false, message: "Passwords must match" });
  }
  if (!validator.isEmail(email)){
    return res.json({ ok: false, message: "Invalid email" });
  }
  try {
    const user = await User.findOne({ username } || { email });
    if (user) return res.json({ ok: false, message: "User exists!" });
    const hash = await argon2.hash(password,salt);
    const hash2 = await argon2.hash(password);
    const newUser = {
      username,
      real_name: undefined,
      real_surname: undefined,
      age: undefined,
      email,
      password: hash,
      address: undefined,
      billing_address: undefined,
      isAdmin: false,
    };
    await User.create(newUser);
    res.json({ ok: true, message: "Successfully registered" });
  } catch (error) {
    console.log(error)
    res.json({ ok: false, error });
  }
};
//  {
//     username: form.username,
//     email: form.email,
//     password: form.password
//  }
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password){
    return res.json({ ok: false, message: "All fields are required" });
  }
  if (!validator.isEmail(email)){
    return res.json({ ok: false, message: "Invalid email provided" });
  }
  try {
    const user = await User.findOne({ email } || { username });
    if (!user) return res.json({ ok: false, message: "Invalid user provided" });
    const match = await argon2.verify(user.password, password);
    if (match) {
      const token = jwt.sign({userEmail:user.email, userUsername:user.username, userRealName:user.real_name,  userRealSurname:user.real_surname, userAdmin:user.isAdmin, userAddress:user.address, userBillingAddress:user.billing_address}, jwt_secret, { expiresIn: "1h" }); // 1d + 31 00 - 1 -0 9
      res.json({ ok: true, message: "Welcome back", token, email });
    } else return res.json({ ok: false, message: "Invalid data provided" });
  } catch (error) {
    console.log(error);
    res.json({ ok: false, error });
  }
};

const verify_token = (req, res) => {
  console.log(req.headers.authorization);
  const token = req.headers.authorization;
  jwt.verify(token, jwt_secret, (err, succ) => {
    err
      ? res.json({ ok: false, message: "Token is corrupted" })
      : res.json({ ok: true, succ });
  });
};

const changeUser = (req,res) => {
  const { real_name, real_surname, age, password, address, billing_address } = req.body;
  if (!real_name && !real_surname && !age && !password && !address && !billing_address){
    return res.json({ ok: false, message: "Nothing to change!" });
  }
  if (real_name || real_surname || age || password || address || billing_address){
    return res.json({ ok: false, message: "Nothing to change!" });
  }
};

module.exports = { register, login, verify_token, changeUser };