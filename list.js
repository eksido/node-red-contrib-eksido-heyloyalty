function List(client) {
    this.client = client;
  }
  
  List.prototype.getAll = function(callback, orderBy, direction, supports) {
    this.client.call("lists", {}, "GET", function(err, response, body) {
      callback(err, JSON.parse(body));
    });
  }
  
  List.prototype.get = function(callback, id) {
    this.client.call("lists/"+id, {}, "GET", function(err, response, body) {
      callback(err, JSON.parse(body));
    });
  }
  
  List.prototype.create = function(callback, name, country_id, duplicates, fields) {
  
  }
  
  List.prototype.update = function(callback, id, name, country_id, duplicates, fields) {
  
  }
  
  List.prototype.remove = function(callback, id) {
  
  }
  
  module.exports = List;