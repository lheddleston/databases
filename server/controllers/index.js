var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          throw new Error('Error getting messages from db', err);
        }
        res.json(results);
      })
    },
    post: function (req, res) {
      //parse the request here
      var params = [req.body.message_body];
      models.messages.post(params, (err, results) => {
        if (err) { throw new Error('Error posting messages to db', err);}
        res.sendStatus(201);
      });
    }
    // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { throw new Error('Error getting from user', err)}
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.user_name];
      models.users.post(params, function(err, results) {
        if (err) { throw new Error('Error posting to user', err)}
        res.sendStatus(201);
      });
    }
  }
};

