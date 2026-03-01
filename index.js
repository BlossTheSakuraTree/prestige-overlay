const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/player/:tag/:apiKey', async (req, res) => {
  try {
    const playerTag = req.params.tag;
    const apiKey = req.params.apiKey;
    
    const response = await axios.get(
      `https://api.brawlstars.com/v1/players/%23${playerTag}`,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ 
      error: error.response?.data || error.message
    });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


