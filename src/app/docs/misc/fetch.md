### Show ReadableStream with example

```js
fetch("https://jsonplaceholder.typicode.com/photos").then((response) => {
  const reader = response.body.getReader();
  let charsReceived = 0;
  const stream = new ReadableStream({
    start(controller) {
      // The following function handles each data chunk
      function push() {
        // "done" is a Boolean and value a "Uint8Array"
        reader.read().then(({ done, value }) => {
          // Is there no more data to read?
          if (done) {
            console.log("Stream complete");
            // Tell the browser that we have finished sending data
            controller.close();
            return;
          }
			
          charsReceived += value.length;
          // Get the data and send it to the browser via the controller
		  console.log('Read ' + charsReceived + ' characters so far. Current chunk = ');
          controller.enqueue(value);
          push();
        });
      };
      
      push();
    }
  });

  return new Response(stream, { headers: { "Content-Type": "text/html" } });
});
