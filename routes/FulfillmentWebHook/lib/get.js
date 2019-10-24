require('dotenv/config')
const parseString = require('xml2js').parseString
const axios = require('axios')

async function getTrips() {
  return axios.get(
    `https://api.tripit.com/v1/list/trip`,
    {
      auth: {
        username: process.env.TRIPIT_EMAIL,
        password: process.env.TRIPIT_PASS
      },
    })
    .then((response) => {
      let trips
      parseString(response.data, (err, result) => {
        trips = JSON.stringify(result.Response.Trip)
      })

      return JSON.parse(trips)
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`)
      return error
    })
  }

  module.exports = { getTrips } 
