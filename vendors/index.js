$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

function song(){
    var audio=new Audio('static/Spider Man 1967.mp3');
    audio.play();
}