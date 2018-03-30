'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
//     uri: 'mongodb://localhost/chat-dev'
    //http://docs.mlab.com/connecting/
    uri:  'mongodb://<dbuser>:<dbpwd>@ds135xxx.mlab.com:3xxx/xx'
  },

  // Seed database on startup
  seedDB: true

};
