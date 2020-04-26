const mongoose = require("mongoose");
const db = require("./server");
const Game = require("./gameModel.js");
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const data = JSON.parse(event.body);
  const find = {
    ...getAgeData(data.age),
    ...getFilterField('duration', data.duration),
    ...getFilterField('preparationTime', data.preparationTime),
  };

  try {
    const games = await Game.Game.find(find);
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

  function getAgeData(age) {
      if(age === 0) {
          return {age}
      }
      return data.age && { $and: [{ $or: [{ age: 0 }, { age: data.age }] }] }
  }

  function getFilterField(fieldName, field) {
      return field >= 0 && { [fieldName]: field }
  }
};
