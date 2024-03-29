$(window).on("load", function () {
	"use strict";
	$(".loader img").delay(500).fadeOut("slow");
	$(".loader").delay(1000).fadeOut(1200, "swing");
});

(function($) {
	"use strict";

	// sal init
	sal();

	// tab
	$(".tab-content")
		.find(".tab-pane")
		.each(function(idx, item) {
			var navTabs = $(this).closest(".code-tabs").find(".nav-tabs"),
				title = $(this).attr("title");
			navTabs.append(
				'<li class="nav-item"><a class="nav-link" href="#">' +
				title +
				"</a></li>"
			);
		});

	$(".code-tabs ul.nav-tabs").each(function() {
		$(this).find("li:first").addClass("active");
	});

	$(".code-tabs .tab-content").each(function() {
		$(this).find("div:first").addClass("active");
	});

	$(".nav-tabs a").click(function(e) {
		e.preventDefault();
		var tab = $(this).parent(),
			tabIndex = tab.index(),
			tabPanel = $(this).closest(".code-tabs"),
			tabPane = tabPanel.find(".tab-pane").eq(tabIndex);
		tabPanel.find(".active").removeClass("active");
		tab.addClass("active");
		tabPane.addClass("active");
	});

	// accordion-collapse
	$(".accordion-collapse").on("show.bs.collapse", function() {
		$(this).siblings(".accordion-header").addClass("active");
	});
	$(".accordion-collapse").on("hide.bs.collapse", function() {
		$(this).siblings(".accordion-header").removeClass("active");
	});
})(jQuery);
