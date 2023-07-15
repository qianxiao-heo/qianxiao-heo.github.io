window.onload=function(){
    document.body.classList.add("video-show");
}
window.addEventListener("scroll", function (e) {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t < 100) {
        this.document.body.classList.add("video-show");
    }
    else {
        this.document.body.classList.remove("video-show");
    }
})