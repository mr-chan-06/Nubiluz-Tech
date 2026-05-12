import mongoose from 'mongoose';
const MONGODB_URI = 'mongodb+srv://chan638356_db_user:nubiluz123@cluster0.xridjsi.mongodb.net/nubiluz?retryWrites=true&w=majority&appName=Cluster0';

if (!MONGODB_URI) {
  console.error('MONGODB_URI not found');
  process.exit(1);
}

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  requirement: String,
  date: { type: Date, default: Date.now }
});

const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

async function test() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected!');

    // Test Create
    const testMsg = {
      name: 'Test Bot',
      email: 'bot@nubiluz.tech',
      phone: '0000000000',
      requirement: 'Testing the contact form flow.',
      date: new Date()
    };
    
    console.log('Creating test message...');
    const created = await Message.create(testMsg);
    console.log('Created:', created._id);

    // Test Fetch
    console.log('Fetching messages...');
    const messages = await Message.find({}).sort({ date: -1 }).limit(5);
    console.log('Last 5 messages:', messages.map(m => m.name));

    await mongoose.disconnect();
    console.log('Disconnected.');
  } catch (err) {
    console.error('Test failed:', err);
  }
}

test();
