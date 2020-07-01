// heyloyalty.js

module.exports = function(RED) {

    function HeyloyaltyNode(config) {
  
      RED.nodes.createNode(this,config);
      var node = this;
      
      this.apikey = config.apikey;
      this.apisecret = config.apisecret;
  
      node.on('input', function(msg) {
        this.status({fill:"green",shape:"dot",text:"sending"});

        var Client = require('./client.js');
        var client = new Client(this.apikey, this.apisecret);

        client.getListClient().getAll(function(err, json) {console.log(json)});

        this.status({});
      })
    }
    
    RED.nodes.registerType("heyloyalty", HeyloyaltyNode, {
      credentials: {
        apikey: {type:"text"},
        apisecret: {type:"password"}
      }
    })
  }