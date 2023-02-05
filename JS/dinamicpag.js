document.addEventListener("DOMContentLoaded", function() {
  let links = document.querySelectorAll(".dinLinks a");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      event.preventDefault();
      let id = this.getAttribute("href").substring(1);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          let dinContent = document.getElementById("dinContent");
          dinContent.innerHTML = xhr.responseText;
        }
      };

      xhr.open("GET", "content/" + id + ".html", true);
      xhr.send();
    });
  }
});
