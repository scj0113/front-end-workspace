// 1. show, hide, toggle

$('#show').click(function() {
    $('#img').show(3000);
});

$('#hide').click(function() {
    $('#img').hide(3000);
});

$('#toggle').click(function() {
    $('#img').toggle(3000);
});

$('#fadeIn').click(function() {
    $('#img').fadeIn(3000);
});

$('#fadeOut').click(function() {
    $('#img').fadeOut(3000);
});

$('#fadeToggle').click(function() {
    $('#img').fadeToggle(3000);
});


$('#img').hover(
    function() {
        $(this).fadeTo(1000,0.5);
    },
    function() {
        $(this).fadeTo(1000,1);
    }
);

// 3. slideDown, slideUp, slideToggle

// $('.menu').click(function(e) {
//     const content = $(e.target).next();
//     content.slideToggle();
// //     if(content.css('display') === 'none'){
// //         content.slideDown();
// //     } else {
// //         content.slideUp();
// //     }
//  }
// );


// 컨텐츠 하나만 slideDown 되도록
$('.menu').click(function(e) {
    const content = $(e.target).next();  
$('.contents').slideUp();
content.slideDown();
 }
);