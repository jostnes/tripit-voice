const trips = require('../lib/get')

exports.handle = async ({ parameters }) => {
    const fulfillmentResponse = {
        "fulfillmentText": "You have no trips at the moment."
    }

    const listOfTrips = await trips.getTrips()
    console.log('listOfTrips: ', listOfTrips)

    if (listOfTrips) {
        fulfillmentResponse = {
            "fulfillmentText": `You have trips!`
        }
    }

    return fulfillmentResponse
}
