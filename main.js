var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");


// Cursor 
var move = 0;
window.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";
});

// First
document.querySelector("#overlay1").addEventListener("mousemove", function (dets) {
    document.querySelector("#elem1 img").style.scale = 1;
    document.querySelector("#elem1 img").style.opacity = 1;
    cursor.style.opacity = 0;
    document.querySelector("#elem1 img").style.left = (dets.x-375)+"px";
    document.querySelector("#elem1 img").style.top = (dets.y-435)+"px";

});

document.querySelector("#overlay1").addEventListener("mouseleave", function (dets) {
    document.querySelector("#elem1 img").style.scale = 0;
    document.querySelector("#elem1 img").style.opacity = 0;
    cursor.style.opacity = 1;
});

// Second
document.querySelector("#overlay2").addEventListener("mousemove", function (dets) {
    document.querySelector("#elem2 img").style.scale = 1;
    document.querySelector("#elem2 img").style.opacity = 1;
    cursor.style.opacity = 0;
    document.querySelector("#elem2 img").style.left = (dets.x-1000)+"px";
    document.querySelector("#elem2 img").style.top = (dets.y-435)+"px";

});

document.querySelector("#overlay2").addEventListener("mouseleave", function (dets) {
    document.querySelector("#elem2 img").style.scale = 0;
    document.querySelector("#elem2 img").style.opacity = 0;
    cursor.style.opacity = 1;
});

// Third

document.querySelector("#overlay3").addEventListener("mousemove", function (dets) {
    document.querySelector("#elem3 img").style.scale = 1;
    document.querySelector("#elem3 img").style.opacity = 1;
    cursor.style.opacity = 0;
    document.querySelector("#elem3 img").style.left = (dets.x-1435)+"px";
    document.querySelector("#elem3 img").style.top = (dets.y-435)+"px";

});

document.querySelector("#overlay3").addEventListener("mouseleave", function (dets) {
    document.querySelector("#elem3 img").style.scale = 0;
    document.querySelector("#elem3 img").style.opacity = 0;
    cursor.style.opacity = 1;
});