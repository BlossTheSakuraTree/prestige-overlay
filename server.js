const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

const API_KEY = process.env.API_KEY;

app.get('/player/:tag', async (req, res) => {
  try {
    const playerTag = req.params.tag;
    const response = await axios.get(
      `https://api.brawlstars.com/v1/players/%23${playerTag}`,
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch player stats' });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});