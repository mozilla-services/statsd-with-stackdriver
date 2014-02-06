{
    address: "127.0.0.1",
    port: 8125,
    flushInterval : 60000, /* 1min, min. granularity of StackDriver */
    backends: [ 
      // "statsd-backend-raw", /* uncomment to see raw output dumped to the console */
      "stackdriver-statsd-backend" 
    ],
    stackdriver: {
        apiKey: "YOUR_API_KEY_HERE",
        source: "YOUR_INSTANCE_ID_HERE"
        //, debug: "true" /* uncomment to see what is being sent to StackDriver */
    }
};
