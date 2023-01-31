$(document).ready(function(){
    $("a").click(function(){
        $("#conteudo").fadeToggle();
    });
    //Efeito botão animado
    $(".btn-animation").hover(
        function(){$(".btn-animation").removeClass("btn-animated")},
        function(){$(".btn-animation").addClass("btn-animated");
    });

    //Galeria do portifolio
    $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">A imagem #%curr%</a> não pôde ser carregada.',
			titleSrc: function(item) {
				return item.el.attr('title') + ' <small>Por Otávio Lourenço</small>';
			}
		}
	});

    //Filtro galeria
    $("#todas").click(function() {
        $(".landPg").fadeIn();
        $(".port").fadeIn();
        $(".ecomm").fadeIn();
    });

    $("#landing").click(function() {
        $(".landPg").fadeIn();
        $(".port").fadeOut();
        $(".ecomm").fadeOut();
    });

    $("#porti").click(function() {
        $(".port").fadeIn();
        $(".landPg").fadeOut();
        $(".ecomm").fadeOut();
    });

    $("#commerce").click(function() {
        $(".ecomm").fadeIn();
        $(".landPg").fadeOut();
        $(".port").fadeOut();
    });
});

//Efeito fade-in nos elementos
function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {
        let windowHeight = window.innerHeight;
        let elementTop = reveal.getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
}
window.addEventListener("scroll", reveal);

