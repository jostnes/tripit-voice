exports.handler = async (event) => {
  const body = typeof event.body === 'string'
    ? JSON.parse(event.body)
    : event.body

  const queryResult = body?.queryResult

  if (!queryResult) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing queryResult' })
    }
  }

  const result = await getHandler(queryResult.intent.displayName).handle(queryResult)

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
}
