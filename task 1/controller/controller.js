const User = require("../models/users");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken")

dotenv.config();

const postRegister = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password,10);

    const user = new User({ username: username, password: hashedPassword});
    await user.save();

  res.status(201).json({ message: 'User registered successfully' });
 } catch (error) {
  
 res.status(500).json({ error: 'Registration failed' });
 }
 }

 //login 
const postLogin = async (req, res) => {
  try{
    const {username, password} =req.body;

    const user =await User.findOne({username});
    if(!user){
      return res.status(401).json({error: "Invalid username or password"});
    }

    const matchPassword =await bcrypt.compare(password,user.password);
    if(!matchPassword){
      return res.status(401).json({error: "Invalid username or password"});
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET , {
      expiresIn: '1h',
      });
   
      res.status(200).json({ token });

  }catch(error){
    console.log(error)
  res.status(500).json({ error: 'Login failed' });
  }
};

 module.exports = { postRegister,postLogin};







