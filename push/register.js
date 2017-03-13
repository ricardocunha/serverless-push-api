'use strict';

var FCM = require('fcm-push');

module.exports.create = (event, context, callback) => {
  var serverKey = process.env.FIREBASE_SERVER_KEY;
  var fcm = new FCM(serverKey);
  
  const data = JSON.parse(event);
  console.log("subject", data.subject);
  console.log('message', data.message);
  console.log('deviceToken', data.deviceToken);


/*
  const timestamp = new Date().getTime();

  if (typeof data.text !== 'string') {
    console.error('Validation Failed');
    callback(new Error('Couldn\'t create the todo item.'));
    return;
  }

  var message = {
      to: data.deviceToken, // required fill with device token or topics
      collapse_key: 'your_collapse_key',
      data: {
          your_custom_data_key: 'your_custom_data_value'
      },
      notification: {
          title: 'Title of your push notification',
          body: 'Body of your push notification'
      }
  };

  //callback style
  fcm.send(message, function(err, response){
      if (err) {
          console.log("Something has gone wrong!");
      } else {
          console.log("Successfully sent with response: ", response);
      }
  });
*/
  const response = {
    statusCode: 200,
    body: JSON.stringify(result.Item),
  };
  callback(null, response);
};
