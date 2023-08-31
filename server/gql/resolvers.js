
const User = require('../models/User');

const bcrypt = require('bcryptjs')
const { AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'csjaoikasdoidshnoidshoishdohbiuvcuyv'; 

// naming and exporting my resolvers
const resolvers = {
    Query:{
        getUsers: async()=>{
            const user = await User.find({})
            return user
           },
    },



    Mutation:{
        registerUser: async (_, { name, email, password }) => {
            try {
              // Check if a user with the provided email already exists
              const existingUser = await User.findOne({ email });
      
              if (existingUser) {
                throw new AuthenticationError('User with this email already exists');
              }
      
              // Hash the user's password using bcrypt (you need to import it)
              const hashedPassword = await bcrypt.hash(password, 10);
      
              // Create a new user
              const user = new User({
                name,
                email,
                password: hashedPassword,
              });
      
              // Save the user to the database
              const savedUser = await user.save();
      
              // Generate a JWT token
              const token = jwt.sign(
                { userId: savedUser._id, email: savedUser.email },
                SECRET_KEY,
                { expiresIn: '2h' } // Token expiration time
              );
      
              // Return the token and user data in the response
              return { token, user: savedUser };
            } catch (error) {
              throw new Error(error.message);
            }
          },




          login: async (_, { email, password }) => {
            try {
              // Find a user with the provided email
              const user = await User.findOne({ email });
      
              // If the user doesn't exist, throw an authentication error
              if (!user) {
                throw new AuthenticationError('User not found');
              }
      
              // Compare the provided password with the hashed password stored in the database
              const isPasswordValid = await bcrypt.compare(password, user.password);
      
              // If the password is invalid, throw an authentication error
              if (!isPasswordValid) {
                throw new AuthenticationError('Invalid password');
              }
      
              // Generate a JWT token
              const token = jwt.sign(
                { userId: user._id, email: user.email },
                SECRET_KEY,
                { expiresIn: '2h' } // Token expiration time
              );
      
              // Return the token and user data in the response
              return { token, user };
            } catch (error) {
              throw new Error(error.message);
            }
          },








        deleteUser: async(parent,args)=>{
         
         const users = await User.findByIdAndDelete(args.id)
         return users
        }


    }
}

module.exports = resolvers
