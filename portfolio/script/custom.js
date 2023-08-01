$('.open-modal1').click(function() {
    $('.modal1').show()
})
$('.close-modal').click(function() {
    $('.modal1').hide()
})

$(document).ready(function($) {

    $(".scroll_move").click(function(event){         

            event.preventDefault();

            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

    });

});
