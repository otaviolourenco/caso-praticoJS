function leitor() {
    const xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let xmlDoc = this.responseXML;
        let items = xmlDoc.getElementsByTagName("NOTICIA");
  
        for (let i = 0; i < items.length; i++) {
          let titulo =
            items[i].getElementsByTagName("TITULO")[0].childNodes[0].nodeValue;
          let resumo =
            items[i].getElementsByTagName("RESUMO")[0].childNodes[0].nodeValue;
          let ligacao =
            items[i].getElementsByTagName("LIGACAO")[0].childNodes[0].nodeValue;
          let li = document.createElement("li");
          let h2 = document.createElement("h2");
          let p = document.createElement("p");
          let a = document.createElement("a");
          let line = document.createElement("hr")
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
  