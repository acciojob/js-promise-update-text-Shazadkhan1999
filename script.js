//your JS code here. If required.


// requred function
  function getMessage() {
	return new Promise((resolve) => {
	  setTimeout(() => {
		  resolve("Hello, world!");
	  }, 1000);
  });
  }
         // use promise
	  getMessage().then((message) => {
		  document.getElementById("output").textContent = message;
		  
	  });
	  