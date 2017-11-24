$(document).ready(function() {
	var tipoMarco = $("#tipoMarco a");
	var marcoPrecio = 0;
	var marcoImgSrc = "";
	var valorMarco = 0;

	var tipoLente = $("#tipoLente a");
	var lentePrecio = 0;
	var lenteImgSrc = "";

	var tipoMarquilla = $("#tipoMarquilla a");
	var marquillaPrecio = 0;
	var marquillaImgSrc = "";
	
	var valorBase = $("#valor-total").html();
	
	var valorTotal = 0;

	tipoMarco.click(function(event) {
		marcoPrecio = $(this).attr('data-precio-marco');
		marcoImgSrc = $(this).attr('data-img-marco');
		valorMarco = marcoPrecio;
		$("#valorMarco").html(marcoPrecio);
		$("#imagenMarco").attr('src', 'imgs/'+marcoImgSrc);
		// $("#valor-total").html(+valorMarco + +valorBase);		
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
		// $("#valor-total").html(+valorLente + +valorBase);
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
		// $("#valor-total").html(+valorMarquilla + +valorBase);		
		$("#dotMarquilla img").attr('src', 'imgs/'+ marquillaImgSrc);
		$("#imagenMarco").parent(".item").removeClass('active');
		$("#imagenLente").parent(".item").removeClass('active');
		$("#imagenMarquilla").parent(".item").addClass('active');
	});
	
});