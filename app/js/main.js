  function myFunction() {
    var x = document.getElementById("menu-responsive");
    if (x.className === "menu-responsive") {
      x.className += " responsive";
    } else {
      x.className = "menu-responsive";
    }
  }