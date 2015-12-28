var iron_worker = require('iron_worker');
console.log(iron_worker.params());

var MailChimpAPI = require('mailchimp').MailChimpAPI;

var apiKey = '0d7020d3222f47d6a77a32bf76ee60a8-us12';

try { 
  var api = new MailChimpAPI(apiKey, { version : '2.0' });
} catch (error) {
  console.log(error.message);
}

api.call('lists', 'subscribe', {
  id: "ef1bd99125",
  email: {
    email: iron_worker.params().email
  },
  double_optin: false
}, function (error, data) {
  if (error)
    console.log(error.message);
  else
    console.log(JSON.stringify(data)); // Do something with your data!
});