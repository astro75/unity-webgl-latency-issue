console.log("[Worker] Starting worker script");

var idx = 0;

setInterval(() => postMessage(Date.now()), 5);