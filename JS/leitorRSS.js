function leitor() {
    const xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        //para obter os dados do XML
        var xmlDoc = this.responseXML;
        var items = xmlDoc.getElementsByTagName("NOTICIA");
  
        //para criar elementos HTML dinamicamente
        for (var i = 0; i < items.length; i++) {
          var titulo =
            items[i].getElementsByTagName("TITULO")[0].childNodes[0].nodeValue;
          var resumo =
            items[i].getElementsByTagName("RESUMO")[0].childNodes[0].nodeValue;
          var ligacao =
            items[i].getElementsByTagName("LIGACAO")[0].childNodes[0].nodeValue;
          var li = document.createElement("li");
          var h2 = document.createElement("h2");
          var p = document.createElement("p");
          var a = document.createElement("a");
          var line = document.createElement("hr")
          h2.innerHTML = titulo;
          p.innerHTML = resumo;
          a.innerHTML = ligacao;
          a.href = ligacao;
          a.target = "_blank";
          li.appendChild(h2);
          li.appendChild(p);
          li.appendChild(a);
          li.appendChild(line);
          document.getElementById("rss").appendChild(li);
        }
      }
    };
  
    xhttp.open("GET", "dados.xml", true);
    xhttp.send();

    window.addEventListener("load", leitor);
    setTimeout(function() {
      alert("Bem-vindo ao Portifólio do Martin Doe!");
    }, 5000);
  }
  