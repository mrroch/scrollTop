(function () {
  "use strict";


  function createButton() {

    var button = document.createElement("button");

    button.classList.add("backToTop", "hidden");
    button.textContent = "Back to top";
    document.body.appendChild(button);

    return button;

  }


  var button = createButton();


  function animateScroll() {

    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 0) {

      window.scrollBy(0, -5);

      setTimeout(animateScroll, 10);
    }
  }


  button.addEventListener("click", function (e) {

    e.stopPropagation();

    animateScroll();

  }, false);


  window.addEventListener("scroll", function (e) {

    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop >= 100) {
      button.classList.remove("hidden");
    } else {
      button.classList.add("hidden");
    }

  }, false);

}());