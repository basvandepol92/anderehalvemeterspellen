exports.handler = function (event, context, callback) {
  const listOfGames = [
    {
      id: 1,
      title: "Test Game",
      description: "Dit is een omschrijving van het spel",
      duration: 0,
      preparationTime: 0,
      age: 0,
      material: [],
    },
  ];

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(listOfGames),
  });
};
