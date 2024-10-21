import mongoose from 'mongoose';

const connectMongoDB = async () => {
  const mongoDbUrl = process.env.MONGODB_URL;

  if (typeof mongoDbUrl === 'undefined') {
    throw new Error('Please define the MONGODB_URL environment variable');
  }

  try {
    await mongoose.connect(mongoDbUrl);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB', error);
  }
};

export default connectMongoDB;