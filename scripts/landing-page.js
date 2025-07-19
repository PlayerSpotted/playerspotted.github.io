var initMoonShift = function () {
    if(window.scrollY != 0) {
        moonShift();
    }
    $(document).scroll(function() {
        moonShift();
    });
}, initParallax = function () {
    if(window.scrollY != 0) {
        parallaxShift();
    }
    $(document).scroll(function() {
        parallaxShift();
    });
}, moonShift = function () {
    var globalScroll = $(window).scrollTop(),
        scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight),
        moonPos = 15 + scrollPercent * 85;  //center "moon" from 15% to 100%
    $(".moon-backdrop").css({
        background: "radial-gradient(circle at " + moonPos + "% 5%, #7481cc, transparent), radial-gradient(circle at 100% 0, #042e83, transparent)",
        backgroundColor: "#000000",
    });
}, parallaxShift = function () {
    var globalScroll = $(window).scrollTop(),
        parallaxObj = $(".parallax"),
        scrollSpeed = parallaxObj.attr("scrollSpeed");
    parallaxObj.css("top", "-" + (globalScroll * scrollSpeed) + "px");
};

initMoonShift();