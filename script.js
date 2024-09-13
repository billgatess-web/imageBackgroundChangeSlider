var imageBox = document.getElementsByClassName("img-box")[0];
var imageWrap = document.getElementsByClassName("img-wrap")[0];
var originalImg = document.getElementsByClassName("originalImg")[0];
var line = document.getElementsByClassName("line")[0];


originalImg.style.width = imageBox.offsetWidth + "px";

var leftSpace = imageBox.offsetLeft;

imageBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px";
    imageWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}