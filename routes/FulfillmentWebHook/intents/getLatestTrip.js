const trips = require('../lib/get')

exports.handle = async () => {
    let fulfillmentResponse = ''

    const listOfTrips = await trips.getTrips()
    const latestTripDate = listOfTrips
        .map(trip => trip.start_date)
        .sort()

    const latestLocation = listOfTrips
        .filter(trip => trip.start_date === latestTripDate[0])
        .map(trip => trip.primary_location)

    if (listOfTrips.length > 0) {
        fulfillmentResponse = {
            "fulfillmentText": `Your next trip is to ${latestLocation}`
        }
    } else {
        fulfillmentResponse = {
            "fulfillmentText": `Sorry, something went wrong. Couldn't retrieve trips.`
        }
    }

    return fulfillmentResponse
}
