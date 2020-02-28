var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = 'select messages.messages_id, messages.message_body, messages.room_id, messages.user_id \
      from messages order by messages.message_id desc';

      db.query(queryStr, function (err, results) {
        callback(err, results);
      }
      );
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryStr = 'insert into messages(message_body) values (?)';
      db.query(queryStr, params, function (err, results) {
        callback(err, results);
      });
    }
    // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'select * from users';

      db.query(queryStr, function (err, results) {
        callback(err, results);

      }
      );
    },
    post: function (params, callback) {
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, function (err, results) {
        callback(err, results);
      });
    }
  }
};

