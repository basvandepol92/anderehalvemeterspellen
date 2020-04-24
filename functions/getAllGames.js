exports.handler = function(event, context, callback) {
    return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          data:  {
            id: 1,
            title: 'Test Game',
            description: 'Dit is een omschrijving van het spel',
            duration: 0,
            preparationTime: 0,
            age: 0,
            material: []
          }
        })
      })
}