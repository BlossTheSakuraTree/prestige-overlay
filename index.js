app.get('/player/:tag/:apiKey', async (req, res) => {
  try {
    const playerTag = req.params.tag;
    const apiKey = req.params.apiKey;  // User provides their own key
    
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
    res.status(500).json({ error: 'Failed to fetch player stats' });
  }
});
