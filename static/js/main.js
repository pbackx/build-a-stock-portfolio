function showPopup() {
	window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us1.list-manage.com","uuid":"dfef2582094d2c4bfe9f2a0f0","lid":"a04d8917e6","uniqueMethods":true}) })
	//unsetting the cookie
	document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";                  
	document.cookie = "MCPopupSubscribed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

// jQuery for page scrolling feature
jQuery(document).ready(function(e) {
    e(".scroll").click(function(t) {
        t.preventDefault();
        e("html,body").animate({
            scrollTop: e(this.hash).offset().top
        }, 1e3)
    })
    e(".btn.btn-warning").click(showPopup);
});
