var crypto = require('crypto') , hash;
var request = require('request');
var qs = require("querystring");


function Client(key, secret) {
  this.base_url = 'https://api.heyloyalty.com/loyalty/v1';
  this.key = key;
  this.secret = secret;
};

Client.prototype.call = function(endpoint, params, method, callback) {
  var date = new Date(), time = date.toISOString();
  var hash = crypto.createHmac('sha256', this.secret).update(time).digest('hex')
  endpoint = endpoint || 'lists';
  params = params || {};
  method = method || "GET";
  callback = callback || function() {};
  hash = new Buffer(hash).toString('base64');

  var querystring = '';
  if(method=='GET') {
    querystring = '?'+qs.stringify(params);
  }


  var options = {
    method: method,
    url: this.base_url + '/' + endpoint + querystring,
    auth: {
      'user': this.key,
      'pass': hash,
    },
    headers: {
      'X-Request-Timestamp': time,
      'User-Agent': 'request'
    }
  };

  if(method=='POST'||method=='PUT') {
    options['form'] = params;
  }
  request(options, callback);
}

List = require('./List.js');
Client.prototype.getListClient = function() {
  return new List(this);
}


module.exports = Client;