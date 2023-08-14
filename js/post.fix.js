window.addEventListener("scroll", function (e) {
	var t = document.documentElement.scrollTop || document.body.scrollTop;
    let topCover=document.getElementById("post-top-cover");
	if (t < 500) {
		topCover.classList.remove("cover-fixed");
	}
	else {
		topCover.classList.add("cover-fixed");
	}
});