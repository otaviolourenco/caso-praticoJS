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
    $('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
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
