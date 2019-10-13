exports.handle = async ({ parameters }) => {
    const fulfillmentResponse = {
        "fulfillmentText": "You have no trips at the moment."
    }

    return fulfillmentResponse
}
