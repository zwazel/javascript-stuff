$('.dot').mouseenter(function(){
    $(this).fadeTo( 100 , 0.9, 'linear', function() {
        // Animation complete.
        $( this ).css('border-radius', '0%');
    });

    $(this).css({background:'#20B2AA'});
}).click(function(){
    $(this).animate({borderRadius:'10px'});
    $(this).css({background:'#66CDAA'});
});