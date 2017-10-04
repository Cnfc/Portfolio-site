$(document).ready(function() {

	$("body, .left_side").niceScroll({
		horizrailenabled: false
	});

	$(".btn_mnu").click(function() {
		$(this).toggleClass("active");
		$(".left_side").toggleClass("active");
	});

	var wall = new freewall(".gallery");
	wall.reset({
		selector: "a",
		animate: true,
		cellW: 150,
		cellH: 'auto',
		gutterX : 5,
		gutterY : 5,
		onResize: function() {
			wall.fitWidth();
		}
	});

	var images = wall.container.find("a");
	images.find("img").load(function() {
		wall.fitWidth();
	});

	$(".filter_label").click(function() {
		$(".filter_label").removeClass("active");
		var filter = $(this).addClass("active").data("filter");
		wall.filter(filter);
		setTimeout(function() {
			$(window).resize();
			wall.fitWidth();
		}, 400);
	});

// Приближение и увеличение картинки
	// $(".gallery a").magnificPopup({
	// 	type : 'image',
	// 	gallery : {
	// 		enabled : true
	// 	},
	// 	removalDelay: 300,
	// 	mainClass: 'mfp-fade'
	// });

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Thanks for your request!");
			setTimeout(function() {

			}, 1000);
		});
		return false;
	});

});
//show pictures
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
