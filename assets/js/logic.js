$('document').ready(function() {
    
    // click nav-collapsed (mobile)
    $('#menu-icon').on('click', function() {

        // remove animation
        $('.body').removeClass('animated slideInUp');
        
        // move body down to show menu
        $('.body').css('transform', 'translateY(200px)');

        // move menu down a little (so totally below header)
        $('#bs-example-navbar-collapse-1').css('transform', 'translateY(4px)');


    });
});