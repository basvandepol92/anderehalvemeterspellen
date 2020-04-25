const mongoose = require("mongoose");
const db = require("./server");
const Game = require("./gameModel.js");
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const games = await Game.Game.find();
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
