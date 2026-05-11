import dbConnect from './lib/mongodb';
import mongoose from 'mongoose';

// Define Message Schema
const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  requirement: String,
  date: { type: Date, default: Date.now }
});

// Get or create the model
const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const messages = await Message.find({}).sort({ date: -1 });
        res.status(200).json({ success: true, data: messages });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const message = await Message.create(req.body);
        res.status(201).json({ success: true, data: message });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.query;
        if (!id) {
          return res.status(400).json({ success: false, error: 'ID is required' });
        }
        await Message.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Deleted successfully' });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
