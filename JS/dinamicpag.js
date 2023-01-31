document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll(".dinLinks a");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      event.preventDefault();
      var id = this.getAttribute("href").substring(1);

      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var dinContent = document.getElementById("dinContent");
          dinContent.innerHTML = xhr.responseText;
        }
      };

      xhr.open("GET", "content/" + id + ".html", true);
      xhr.send();
    });
  }
});
