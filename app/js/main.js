$(document).ready(function() {
	var input;

	input = $(".search input");

	$(".search input").on("input", function(event) {
		
		search(input.val());
	});

	$(".taxi").on("click", function(event) {
		var number;

		number = $(this).children(".telefon").attr("id");

		dial(number);
	});	

	function dial(number) {
		var dial;

		dial = new MozActivity({
			name: "dial",

			data: {
				number: number
			}
		});
	}

	function stringclean(text) {
		var i, len, string;

		string = "";
		len = text.length;

		for (i = 0; i < len; i++) {
			ascii = text.charCodeAt(i);

			if (ascii > 64 && ascii < 123) {
				string += text[i];
			}
		}

		return string;
	}

	function search(text) {
		//Cautam prin orase

		text = text.toLowerCase();
		text = stringclean(text);

		if (text == "") {
			$("body").animate({
				scrollTop: 0
			}, 1000);
		}
		else {
			$(".oras-title").each(function(index) {
				$id = $(this).attr("id");

				if ($id.indexOf(text) != -1) {
					$("body").stop().animate({
						scrollTop: $(this).offset().top - $(this).height() + 2
					}, 1000);
				}
			});	
		}
	}
});
