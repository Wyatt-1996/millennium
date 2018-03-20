$('document').ready(function() {
    
    // click nav-collapsed (mobile)
    $('#menu-icon').on('click', function() {

        // remove animation
        $('.body').removeClass('animated slideInUp');
        
        // move body down to show menu
        $('.body').css('transform', 'translateY(200px)');

    });
});