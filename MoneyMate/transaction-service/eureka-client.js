const { Eureka } = require('eureka-js-client');
 
// Create Eureka client instance

const client = new Eureka({

  instance: {

    app: 'your-node-service', // Unique name for your service

    instanceId: 'your-node-service-instance-1', // Unique ID

    hostName: 'localhost',

    ipAddr: '127.0.0.1',

    port: {

      '$': 3000,

      '@enabled': true,

    },

    vipAddress: 'your-node-service',

    dataCenterInfo: {

      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',

      name: 'MyOwn',

    },

  },

  eureka: {

    host: 'localhost',       // Eureka server host

    port: 8761,              // Eureka server port

    servicePath: '/eureka/apps/', // Default Eureka REST path

  },

});
 
// Start the Eureka client, register the app

client.start((error) => {

  if (error) {

    console.error('Error starting Eureka client:', error);

  } else {

    console.log('Eureka client registered.');

  }

});

 