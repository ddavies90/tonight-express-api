const axios = require('axios');

exports.searchByCity = async (req, res) => {
  const { city } = req.params;
  const { extendedDate } = req.query;
  const endpoint = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TM_API_KEY}&countryCode=GB&city=${city}`

  if (extendedDate) {
    const today = new Date();
    const dateTimeStart = today.toISOString().slice(0, -5);
    const dateTimeEnd = `${today.toISOString().slice(0,10)}T23:59:59`;
    const formattedDate = `${dateTimeStart},${dateTimeEnd}`
    endpoint += `&localStartDateTime=${formattedDate}`
  }

  try {
    const { data } = await axios.get(endpoint);

    if(!data._embedded) {
      res.status(404).json({
        error: 'City not found. Please try again.'
      });
    } else {
      res.status(200).json(data);
    };
  } catch (e) {
    res.status(500).json({
      error: e
    });
  }
}