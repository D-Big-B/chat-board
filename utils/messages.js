const moment = require("moment");

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format("h:mm a"),
  };
}

function formatRoomInfo(id) {
  return {
    data: `http://localhost:3000/${id}`,
  };
}

module.exports = { formatMessage, formatRoomInfo };
