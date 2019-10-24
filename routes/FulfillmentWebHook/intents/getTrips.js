const trips = require('../lib/get')

exports.handle = async () => {
    let fulfillmentResponse = ''

    const listOfTrips = await trips.getTrips()

    if (listOfTrips.length > 0) {
        fulfillmentResponse = {
            "fulfillmentText": `You have ${listOfTrips.length} trips planned!`
        }
    } else {
        fulfillmentResponse = {
            "fulfillmentText": `Sorry, something went wrong. Couldn't retrieve trips.`
        }
    }

    return fulfillmentResponse
}
