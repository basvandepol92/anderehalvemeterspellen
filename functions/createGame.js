const mongoose = require("mongoose");
const db = require("./server");
const Game = require('./gameModel.js');

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    const data = JSON.parse(event.body);
    const id = mongoose.Types.ObjectId();
    const game = {
        _id: id,
        ...data,
        __v: 0,
      };
    const response = {
        msg: "Product successfully created",
        data: game,
      };

    await Game.Game.create(game);
    return {
      statusCode: 201,
      body: JSON.stringify(response),
    };
  } catch (err) {
    console.log("game.create", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
