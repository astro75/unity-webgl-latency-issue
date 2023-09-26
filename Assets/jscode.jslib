var jscodelib =  {
    $workerState: { lastTime: 0 },

    StartWorker: function () {
        console.log("[Main] Starting main script");
        
        const worker = new Worker("worker.js");
        
        worker.onmessage = (e) => {
            workerState.lastTime = e.data;
            // console.log("[Main] Received from worker:", e.data);
        };
    },

    GetTimeDiff: function () {
        return Date.now() - workerState.lastTime;
    },
};

autoAddDeps(jscodelib, '$workerState');
mergeInto(LibraryManager.library, jscodelib);