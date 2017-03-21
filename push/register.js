'use strict';

var FCM = require('fcm-node');

module.exports.create = (event, context, callback) => {

  var serverKey = process.env.FIREBASE_SERVER_KEY;
  var fcm = new FCM(serverKey);

  if (event.deviceToken == 'undefined') {
    console.error('Validation Failed');
    callback(new Error('Couldn\'t create the send item.'));
    return;
  }

  var message = {
      to: event.deviceToken,
      notification: {
          title: event.subject,
          body: event.message
      }
  };

  var returnMessage = "";

  //callback style
  fcm.send(message, function(err, response){
      if (err) {
          console.log("Something has gone wrong!",err);
          returnMessage ="Error: "+err;

      } else {
          console.log("Successfully sent with response: ", response);
          returnMessage ="Success: "+response;
      }
      const res = {
        statusCode: 200,
        body: JSON.stringify({
          message: returnMessage,
          input: event,
        }),
      };
      callback(null, res);
  });
};
