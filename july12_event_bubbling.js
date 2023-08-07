function cardHandler() {
    // any logic
    console.log("Card Clicked");
    alert("Hey Leaving page");
    window.location.pathname = "Dom.html";
  }
  
  function buttonHandler(event) {
    // stoping  by default behaviou of javascript
    event.stopPropagation();
    console.log("buttonHandler");
  }