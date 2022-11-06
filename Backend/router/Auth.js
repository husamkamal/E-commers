const AuthRouter = require('express').Router();

const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');

const User = require('../modules/User');

AuthRouter.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({
    username,
    email,
    password: CryptoJs.AES.encrypt(password, process.env.PASS_SECRET).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

AuthRouter.post('/login', async (req, res) => {
  const { username } = req.body;
  try {
    const user = await User.findOne({ username });
    // eslint-disable-next-line no-unused-expressions
    !user && res.status(401).json('Wrong credentials');

    const hashPassword = CryptoJs.AES.decrypt(user.password, process.env.PASS_SECRET);
    const originPassword = hashPassword.toString(CryptoJs.enc.Utf8);
    // eslint-disable-next-line no-unused-expressions
    originPassword !== req.body.password && res.status(401).json('not matching password');
    const accessToken = jwt.sign(
      {
        // eslint-disable-next-line no-underscore-dangle
        id: user._id, isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: '3d' },
    );
    // eslint-disable-next-line no-underscore-dangle
    const { password, ...other } = user._doc;
    res.status(200).json({ ...other, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = AuthRouter;
