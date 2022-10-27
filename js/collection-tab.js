(function () {
  function openProducts(evt, productName) {
    let i, collectionTabcontent, collectionTablinks;
    collectionTabcontent = document.querySelectorAll(".collection-tabcontent");
    for (i = 0; i < collectionTabcontent.length; i++) {
      collectionTabcontent[i].style.display = "none";
    }
    collectionTablinks = document.querySelectorAll(".collection-tablinks");

    for (i = 0; i < collectionTablinks.length; i++) {
      collectionTablinks[i].className = collectionTablinks[i].className.replace(
        " collection-tablinks--active",
        ""
      );
    }
    document.getElementById(productName).style.display = "block";
    evt.currentTarget.className += " collection-tablinks--active";
  }

  document.querySelector(".collection-tablinks-women").onclick = function () {
    openProducts(event, "women");
  };
  document.querySelector(".collection-tablinks-men").onclick = function () {
    openProducts(event, "men");
  };
  document.querySelector(".collection-tablinks-shoes").onclick = function () {
    openProducts(event, "shoes");
  };
  document.getElementById("defaultOpen").click();
})();
