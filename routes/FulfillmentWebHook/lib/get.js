const axios = require('axios')
// const request = require('request')

async function getTrips() {
  console.log(`what is auth: ${process.env.TRIPIT_AUTH}`)
  console.log(`what is node env: ${process.env.NODE_ENV}`)

  return axios.get(
    `https://api.tripit.com/v1/list/trip/`,
    {
      headers: {
        Authorization: `Basic ${process.env.TRIPIT_AUTH}`
      },
    })
    .then((response) => {
      console.log('response: ', response)
      return response
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`)
      return error
    })
  }

  module.exports = { getTrips } 