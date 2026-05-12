import mongoose from 'mongoose';
const MONGODB_URI = 'mongodb+srv://chan638356_db_user:nubiluz123@cluster0.xridjsi.mongodb.net/nubiluz?retryWrites=true&w=majority&appName=Cluster0';

async function test() {
  console.log('Testing connection with 5s timeout...');
  try {
    const conn = await Promise.race([
      mongoose.connect(MONGODB_URI),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 10000))
    ]);
    console.log('Connected successfully!');
    await mongoose.disconnect();
  } catch (err) {
    console.error('Connection failed:', err.message);
  }
  process.exit();
}

test();
