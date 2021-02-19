$('#button1').click( function(event) { 
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#form-header").offset().top  
    }, 1400);
} );
