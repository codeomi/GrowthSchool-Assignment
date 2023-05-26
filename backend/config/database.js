const mongoose = require('mongoose')

// mongoose.set('strictQuery', false);

const mongoUri = 'mongodb+srv://omkar7890:omkar@cluster0.ymedshl.mongodb.net/';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
