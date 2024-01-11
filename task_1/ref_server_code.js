const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());

// MongoDB Schema
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  age: Number,
  gender: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Registration Endpoint
app.post('/register', async (req, res) => {
  try {
    // Validate input (add more validation)
    const { name, username, age, gender, email, password } = req.body;

    // // Hash password
    // const salt = await bcrypt.genSaltSync(10);
    // const hashedPassword = await bcrypt.hash(plainPassword, salt);

    // Create user in MongoDB
    const newUser = new User({
      name,
      username,
      age,
      gender,
      email,
      password
    });

    await newUser.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// ... (rest of the code remains the same)



// Login Endpoint
app.post('/login', async (req, res) => {
    try {
      // Validate input (add more validation)
      const { usernameOrEmail, password } = req.body;
  
      // Check if the user exists
      const user = await User.findOne({
        $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
  
      // Send the token in the response
      res.status(200).json({ token });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Internal Server Error' }); // Fix typo here
    }
  });
  

// Protected Route Example
app.get('/protected', (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});