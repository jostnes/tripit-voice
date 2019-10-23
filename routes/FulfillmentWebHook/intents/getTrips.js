const trips = require('../lib/get')

exports.handle = async ({ parameters }) => {
    let fulfillmentResponse = ''

    const listOfTrips = await trips.getTrips()
    console.log('listOfTrips: ', listOfTrips)

    if (listOfTrips) {
        fulfillmentResponse = {
            "fulfillmentText": `You have trips!`
        }
    } else {
        fulfillmentResponse = {
            "fulfillmentText": `Sorry, something went wrong. Couldn't retrieve trips.`
        }
    }

    return fulfillmentResponse
}
