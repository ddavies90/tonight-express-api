const axios = require('axios');

exports.searchByCity = async (req, res) => {
  const { city } = req.params;
  const endpoint = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TM_API_KEY}&countryCode=GB&city=${city}`

  const { data } = await axios.get(endpoint);
  res.status(200).json(data);
}