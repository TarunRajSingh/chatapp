'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
//     uri: 'mongodb://localhost/chat-test'
+    //http://docs.mlab.com/connecting/
+    uri:  'mongodb://<dbuser>:<dbpwd>@ds135xxx.mlab.com:3xxx/xx'
  },
  sequelize: {
    uri: 'sqlite://',
    options: {
      logging: false,
      storage: 'test.sqlite',
      define: {
        timestamps: false
      }
    }
  }
};
