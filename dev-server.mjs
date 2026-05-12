import http from 'http';
import { URL } from 'url';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables (dotenv not available, using hardcoded fallback)
// dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://chan638356_db_user:nubiluz123@cluster0.xridjsi.mongodb.net/nubiluz?retryWrites=true&w=majority&appName=Cluster0';
const PORT = 5000;

// Define Message Schema (must match api/messages.js)
const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  requirement: String,
  date: { type: Date, default: Date.now }
});

const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGODB_URI);
}

const server = http.createServer(async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  if (pathname === '/api/messages') {
    try {
      await dbConnect();

      if (req.method === 'GET') {
        const messages = await Message.find({}).sort({ date: -1 });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, data: messages }));
      } 
      else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            const message = await Message.create(data);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, data: message }));
          } catch (err) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: err.message }));
          }
        });
      } 
      else if (req.method === 'DELETE') {
        const id = parsedUrl.searchParams.get('id');
        if (!id) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'ID is required' }));
          return;
        }
        await Message.findByIdAndDelete(id);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Deleted successfully' }));
      }
    } catch (error) {
      console.error('Server Error:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: 'Internal Server Error' }));
    }
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Dev API Server running at http://localhost:${PORT}`);
  console.log(`Connected to MongoDB: ${MONGODB_URI.split('@')[1]}`);
});
