
// #######################################################################
// jQuery
// #######################################################################

// 1.
// check DOM load
$(document).ready 
// or 
$(function(){})

// check DOM load
$(document).ready(function(){
    // the DOM has now loaded
});
// or
$(function() {
    // a shorter way to wait for the DOM to load
});

// longer syntax non-jQuery
document.addEventListener("DOMContentLoaded", function() {
    // a longer way to wait for the DOM to load, without jQuery.
    // jQuery's syntax is much shorter!
});


// equivalent in vanilla JS
querySelector
querySelectorAll




// 2.
// exemplifying jQuery object

// 2 ex 1
$(document).ready(function(){
    console.log($("article"));
});

// 2 ex 2
$( document ).ready(function() {
    $( "a" ).click(function( event ) {
        alert( "Thanks for visiting!" );
    });
});




// 3. add a CSS class to an HTML object
$( "a" ).addClass( "test" );
$("a").removeClass("test");

// output
a.test {
    font-weight: bold;
}



// 4.
// 2 anonymous functions, button click --> animate.
$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({height:"toggle"}).append("hi");
    });
});




// 5.
// Replace document.getElementById('main');
$(document).ready(function(){
    var mainElement = document.getElementById('main'); // THIS IS NOT GREAT!
});

// improved
// jquery links to document, and upon it's readiness an anonymous function fires which creates a jquery object equaling to the id of 'main'
$(document).ready(function(){
    var $mainElement = $('#main'); // THIS IS MUCH BETTER!
});

// use $ to indicate variables




// 6. Exercises

        // Write the necessary to code wait for the DOM to load in jQuery.
        $(document).ready 
        $(function() {
            
        // Select the footer element.
        $(document).ready(function(){
            var $footer = $('footer');
        });
        //or
        $("footer");

        // Select the div with an id of "container".
        $(document).ready(function(){
            var $container = $('#container');
        });
        $("#container"); // notice the two ""

        // Select all of the lis inside of the ul with a class of nav.
        $(document).ready(function(){
            var $liNav = $(`ul > li.nav`); // wrong
        });
        // correct
        $(".nav li");

        // Select the third li inside of the div with a class of list-container.
        $(".list container li:nth-child(3)");

        // 6. Select only the last li in each of the uls.
        $("ul li:last-child");
        });



        
// 7. 
// modifying elements

// html / text / val
// getters
$(document).ready(function(){
    $("article").html(); // innerHTML
    $("article").text(); // innerText
    $("input").val(); // value
});

// use the val function to get values inside of the element.
// there's a difference between setters and getters. Setters set the value

// setters
$(document).ready(function(){
    $("article").html("<h1>Here's some large text.</h1>"); // innerHTML
    $("li").text("hi!"); // innerText
    $("input").val("new value"); // value = new value
});


// addClass / removeClass / toggleClass

$(document).ready(function(){
    $("article").addClass("hidden"); // add a class
    $("article").removeClass("hidden"); // remove a class
    $("article").toggleClass("hidden"); // toggle the class (if on -> off, if off -> on)
});

// css / data / attr
// access styles using css function, attributes with attr
// pass in a single argument to use them as getter or two to use them as setters
$(document).ready(function(){
    $("article").css("background-color", "red");
    $("article").css("background-color"); // "red"
    $("article").attr("style", "display:flex;");
    $("article").data("id", "1");
});





// 1. When the DOM is ready, console.log the message "Let's get ready to party with jQuery!"
$(function() {
console.log("Let's get ready to party with jQuery!");
// 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$("article img").addClass("image-center");
// 3. Remove the last paragraph in the article.
$("article p:last-child").remove();
// 4. Set the font size of the title to be a random pixel size from 0 to 100.
$("#title").css("font-size", Math.random() * 100);
// 5. Add an item to the list; it can say whatever you want.
$("ol").append($("<li>", {text: "I can add to lists with jQuery!" }));
// 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.
$("aside").empty()
            .append($("<p>", {text: "Sorry about that list :("}));

// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$(".form-control").on('keyup blur change', function() {
    var red = $(".form-control").eq(0).val();
    var blue = $(".form-control").eq(1).val();
    var green = $(".form-control").eq(2).val();
    $("body").css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
});
// 8. Add an event listener so that when you click on the image, it is removed from the DOM.
$("img").on('click', function(e) {
    $(e.target).remove();
});
});


// #######################################################################
// Side Note: AJAX
// #######################################################################

function loadText(){
    // create an XHR object
    var xhr = new XMLHttpRequest(); // this a function
    // if you logged XMLHttpRequest, you'll see a readyState with different values, onload function, a status (like status 404 not found)
    // OPEN - type, url/filename, async = true/false
    xhr.open(`GET`, `sample.txt`, true);
    
    // just a check
    console.log('READYSTATE: ', xhr.readState); // theoretically would print READYSTATE: 1
    // just a check

    xhr.onload = function(){
        if(this.status == 200){ // check for status of the response // use the "this" keyword because inside the function
            document.getElementById('text').innerHTML = this.responseText;
            console.log(this.responseText);
        }
    }
    
    // ready STate change
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){ // checking for readyState and status
            console.log(this.responseText);
        }
    }
    
    // loading
    // on progress OPTION used for loaders
    xhr.onprogress = function(){
        console.log('ReADYSTATE: ', xhr.readState);
    }
    
    // use on error, theroetically checking for errors
    xhr.onerror = function(){
        console.log('Request Error..');
    }
    
    
    // send request
    xhr.send();
    
}