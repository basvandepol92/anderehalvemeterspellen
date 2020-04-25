const mongoose = require("mongoose");
const db = require("./server");
const Game = require("./gameModel.js");
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const data = JSON.parse(event.body);
  console.log(data);
  try {
    const games = await Game.Game.find(data);
    return {
      statusCode: 200,
      body: JSON.stringify(games),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
