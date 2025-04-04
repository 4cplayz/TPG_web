import express from "express";
import path from "path";
import { fileURLToPath } from "url";


// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the public directory using absolute paths
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/information', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "information.html"));
});

// This should be the LAST route - 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});