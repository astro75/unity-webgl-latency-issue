var jscodelib =  {
    $jscodelibState: { lastTime: 0 },

    StartWorker: function () {
        console.log("[Main] Starting main script");
        
        const worker = new Worker("worker.js");
        
        const buffer = new SharedArrayBuffer(8);
        const bufferView = new BigInt64Array(buffer);
        bufferView[0] = BigInt(Date.now());
        
        console.log("Date.now()", Date.now());
        console.log("bufferView[0]", bufferView[0]);
        
        jscodelibState.bufferView = bufferView;
        
        worker.postMessage(buffer);
        
        // worker.onmessage = (e) => {
        //     jscodelibState.lastTime = e.data;
        // };
    },

    GetTimeDiff: function () {
        return Date.now() - Number(jscodelibState.bufferView[0]);
    },
};

autoAddDeps(jscodelib, '$jscodelibState');
mergeInto(LibraryManager.library, jscodelib);