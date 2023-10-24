const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

const storage = multer.memoryStorage(); // Store the image in memory

const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
  // Handle the uploaded file here
  const imageBuffer = req.file.buffer;
  // You can save the image to the server, process it, or store its details in a database.
  // For this example, let's just send a success response.
  res.status(200).json({ message: 'Image uploaded successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
