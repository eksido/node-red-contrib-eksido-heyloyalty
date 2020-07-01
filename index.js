var api_key = '06koGf6WcBnHrAhC';
var api_sec = 'BxZyjskcAQlIT4K3aECfCqYSqDtvBpqm';

var Client = require('./client.js');
var client = new Client(api_key, api_sec);

client.getListClient().getAll(function(err, json) {console.log(json)});