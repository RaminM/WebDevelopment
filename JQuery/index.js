//modify css
$("h1").css("color","red");

//Add of remove class
$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title margin-50");

//check if has class
$("h1").hasClass("margin-50");

//Change text
$("h1").text("Bye");
//Change inner html
$("h1").html("<em>Bye</em>");

//Set atrribute
$("a").attr("href","https://www.google.com");

//Event listener
$("h1").click(function(){
    $("h1").css("color","blue");
});

//Multiple objects event listener
// $("button").click(function(){
//     $("h1").css("color","green");
// });

//Ker press
$("input").keypress(function(e){
    $("h1").text(e.key);
});

//Event listener 2
$("h1").on("mouseover",function(){
    $("h1").css("color","black");
})

//Add elements
$("h1").before("<button>before</button>");//Before element
$("h1").after("<button>after</button>");//after element
$("h1").prepend("<button>prepend</button>");//inner html: in the h1 before the text
$("h1").append("<button>append</button>");//inner html: in the h1 after the text

//Remove elements
// $("button").remove();

//Animation
$("button").click(function(){
    // $("h1").fadeToggle();
    // $("h1").slideToggle();

    //Custom animation (css values with numeric values)
    // $("h1").animate({opacity:0.5});

    //Chain animations together in order
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});