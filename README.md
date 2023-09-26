# unity-webgl-latency-issue

Test build at
https://astro75.github.io/unity-webgl-latency-issue/build/

Code starts a webworker that sends messages with current timestamp every 5 ms. Main js thread stores the last received message. 
Unity on Update reads how long ago js main thread received the last message and displays it in text on the left and also as a red bar. 
Lets call this number `latency`

On the right you can control busy loop duration. Unity code will run that busy loop on main thread on every Update.

To reproduce a bug:
1. Open build with a Chromium based web browser.
2. Set busy loop to 30 ms.
3. Hold any key on the keyboard.
4. Observe `latency` number increase drastically while you hold a keyboard button.

The same issue can be reproduced if you use WebSocket instead of WebWorker. I used WebWorker, because it does not require hosting a server.
It is extremely important to not delay received WebSocket messages for multiplayer games.
