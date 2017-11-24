$(document).ready(function() {
	var tipoMarco = $("#tipoMarco a");
	var marcoPrecio = $("#valorMarco").html();
	var marcoImgSrc = "";

	var tipoLente = $("#tipoLente a");
	var lentePrecio = $("#valorMarco").html();
	var lenteImgSrc = "";

	var tipoMarquilla = $("#tipoMarquilla a");
	var marquillaPrecio = $("#valorMarco").html();
	var marquillaImgSrc = "";
	
	var valorTotal = 0;

	tipoMarco.click(function(event) {
		marcoPrecio = $(this).attr('data-precio-marco');
		marcoImgSrc = $(this).attr('data-img-marco');
		$("#valorMarco").html(marcoPrecio);
		$("#imagenMarco").attr('src', 'imgs/'+marcoImgSrc);
		valorTotal = +marcoPrecio + +lentePrecio + +marquillaPrecio;
		$("#valor-total").html(valorTotal);		
		$("#dotMarco img").attr('src', 'imgs/'+ marcoImgSrc);
		$("#imagenLente").parent(".item").removeClass('active');
		$("#imagenMarquilla").parent(".item").removeClass('active');
		$("#imagenMarco").parent(".item").addClass('active');
	});

	tipoLente.click(function(event) {
		lentePrecio = $(this).attr('data-precio-lente');
		lenteImgSrc = $(this).attr('data-img-lente');
		$("#valorLente").html(lentePrecio);
		$("#imagenLente").attr('src', 'imgs/'+lenteImgSrc);
		valorTotal = +marcoPrecio + +lentePrecio + +marquillaPrecio;
		$("#valor-total").html(valorTotal);
		$("#dotLente img").attr('src', 'imgs/'+ lenteImgSrc);
		$("#imagenMarco").parent(".item").removeClass('active');
		$("#imagenMarquilla").parent(".item").removeClass('active');
		$("#imagenLente").parent(".item").addClass('active');
	});

	tipoMarquilla.click(function(event) {
		marquillaPrecio = $(this).attr('data-precio-marquilla');
		marquillaImgSrc = $(this).attr('data-img-marquilla');
		$("#valorMarquilla").html(marquillaPrecio);
		$("#imagenMarquilla").attr('src', 'imgs/' + marquillaImgSrc);
		valorTotal = +marcoPrecio + +lentePrecio + +marquillaPrecio;
		$("#valor-total").html(valorTotal);
		$("#dotMarquilla img").attr('src', 'imgs/'+ marquillaImgSrc);
		$("#imagenMarco").parent(".item").removeClass('active');
		$("#imagenLente").parent(".item").removeClass('active');
		$("#imagenMarquilla").parent(".item").addClass('active');
	});
	
});