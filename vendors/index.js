$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
var audio=new Audio('static/Spider Man 1967.mp3');
function song(){
    
    audio.play();
}
function pause(){
    audio.pause();
}