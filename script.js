//your JS code here. If required.


// requred function
  function getMessage() {
	return new Promise((resolve) => {
	  setTimeout(() => {
		  resolve("hello world");
	  }, 1000);
  });
  }
         // use promise
	  getMessage().then((message) => {
		  document.getElementById("output").textContent = message;
		  
	  });
	  