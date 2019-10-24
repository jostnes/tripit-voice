exports.handler = async (event) => {
    const queryResult = event.body.queryResult || JSON.parse(event.body).queryResult

    if(!queryResult) { return }
    const result = await getHandler(queryResult.intent.displayName).handle(queryResult)
    const response = {
        statusCode: 200,
        body: JSON.stringify(result)
    }
    return response
};

function getHandler(intentName) {
    try {
        return require(`./routes/FulfillmentWebHook/intents/${intentName.substring(0, intentName.indexOf('-') > 0 ? intentName.indexOf('-') : intentName.length).trim()}`)
    } catch (error) {
        console.log(error)
        return {
            handle: defaultHandler
        }
    }
}

function defaultHandler() {
    return {
        "fulfillmentText": "Sorry can't process your request."
    }
}
