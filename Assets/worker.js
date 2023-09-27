console.log("[Worker] Starting worker script");

onmessage = function (e) {
    const buffer = e.data;
    const bufferView = new BigInt64Array(buffer);
    setInterval(() => bufferView[0] = BigInt(Date.now()), 5);
}

//setInterval(() => postMessage(Date.now()), 5);