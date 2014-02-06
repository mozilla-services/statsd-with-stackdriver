var statsd = require('node-statsd').StatsD,
    client = new statsd({
        host   : "127.0.0.1",
        prefix : "fake-stats-test."
    }),
    fruits = [ "apple", "banana", "orange", "pear", "strawberry", "grape" ];

(function sendStats() {

    console.log("Sending stats...");
    
    // Timing: sends a timing command with the specified milliseconds
    client.timing('timing', Math.floor(Math.random() * 1000));
  
    // Increment: Increments a stat by a value (default is 1)
    client.increment('counter.inc', 1.3);
  
    // Decrement: Decrements a stat by a value (default is -1)
    client.decrement('counter.dec', -1.25);
  
    // Gauge: Gauge a stat by a specified amount
    var m = process.memoryUsage();
    client.gauge('node.mem.gauge.rss', m.rss);
    client.gauge('node.mem.gauge.heapTotal', m.heapTotal);
    client.gauge('node.mem.gauge.heapUsed', m.heapUsed);
  
    // Set: Counts unique occurrences of a stat (alias of unique)
    client.unique('fruits', fruits[Math.floor(Math.random() * fruits.length)]);

    // let's keep going ...
    setTimeout(sendStats, 50 + Math.floor(Math.random() * 1000));
})();

