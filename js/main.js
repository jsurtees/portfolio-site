function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
    // document.getElementById("main").style.marginRight = "75%";
    // document.getElementById("start").style.height = "10em";
    // document.getElementById("biobody").style.fontSize = "0.6em";
    // document.getElementById("bioheader").style.fontSize = "1.5em";
    // document.getElementById("space").style.height = "22em";
    // document.getElementById("fill").style.background = "#494138";
    // document.getElementById("fill").style.borderLeft = "2px solid #EBBE50";
    // document.getElementById("fill").style.borderRight = "2px solid #EBBE50";
    // document.getElementById("fill").style.borderBottom = "2px solid #EBBE50";
    // document.getElementById("fill").style.transition = "0.3s ease";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    // document.getElementById("start").style.height = "30em";
    // document.getElementById("biobody").style.fontSize = "1.2em";
    // document.getElementById("bioheader").style.fontSize = "2.5em";
    // document.getElementById("space").style.height = "30em";
    // document.getElementById("fill").style.background = '#494138';
    // document.getElementById("fill").style.borderLeft = "1px solid #EBBE50";
    // document.getElementById("fill").style.borderRight = "1px solid #EBBE50";
    // document.getElementById("fill").style.borderBottom = "1px solid #EBBE50";
    // document.getElementById("fill").style.transition = "0.3s ease";
}

// $(document).ready(function(){
// 	$('nav-btn').click(function(){
// 		$(this).toggleClass('nav-btn-open');
//   });
// });

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
    if($(this).hasClass('open')){
      openNav();
    } else {
      closeNav();
    }
	});
});

// const tilt = $('[data-tilt]').tilt();
// let tiltResetTimeout;
//
// $('[data-tilt]').on('mousemove', function(e){
//   clearTimeout(tiltResetTimeout);
//
//   tiltResetTimeout = setTimeout(function(){
//     tilt.tilt.reset.call(tilt);
//   }, 2000)
// });


//
// $('.nav-close').click(function() {
//   $('.nav-close').hide();
//   $('.nav-open').show();
// });
//
// $('.nav-open').click(function() {
//   $('.nav-close').show();
//   $('.nav-open').hide();
// });
