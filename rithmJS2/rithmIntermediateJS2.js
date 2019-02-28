
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
    $("article").data("id", "1"); // what would data be yielding. Why is ID a value of 1?
});



// 8.
// traversing DOM
// use find to access CSS selectors and show children and parents
find // accepts CSS selector to find elements
children // access child's parent element
next // next element in list of siblings
prev // find previous

$(document).ready(function(){
    var $childDivsInsideArticle = $("article").find("div").children();
}); // find the children of the div element within the article element


// 9.
// filtering
is, has, not, eq // are filters

.eq() // select elements at a specific index, for instance do .eq(3) for the third li element.
.filter() // select elements that match the selector or pass a test
.first() // select first in the set
.has() // select elemetnts with a descendant matching the selector
.is() // check selected elements against an object which might return true if at least one matches the args ??
.last() // if you ain't first you're last
.map() // produce new jQuery objects containing return values
.not() // remove elements from the set of matched elements
.slice() // reduce set of matched elements to a specified range of indices


var $firstLi = $("li")[0];
$firstLi.innerText; // "Item 1

eq // access items iside of a jquery object
// makes things easier for method chaining

var $firstLi = $("li").eq(0);
var $secondLi = $("li").eq(1);
$firstLi.text(); // "Item 1"
$secondLi.text(); // "Item 2"


// 10.
// adding / removing
// after / before / append / prepend
after // add elements to DOM after selected element
before // add elements to DOM before selected element
append // add selected elemnts nested at the end
prepend // add selected elements nested at the beginning


// example

$(document).ready(function(){
    // case 1
    var $newParagraph = $("<p>");
    $newParagraph.text("Another article");
    $newParagraph.css("color","red");

    // case 2
    var $anotherParagraph = $("<p>", {
        text:"Another approach",
        css: {
            color: "purple",
            // we have to use quotes because of the '-'
            "font-size": "2em"
        }
    });
    
    $("article").append($newParagraph);
    $("article").prepend($anotherParagraph);
});

// case 1: create element and set attributes on it in subsequent lines
// case 2: pass two arguments into the jQuery, new element and an object with the attributes we'd like to set


// 11. 
// empty vs remove
$(document).ready(function(){
    $("article").empty(); // remove all content inside the article
    $("article").remove(); // remove the article element itself from the DOM
});

// 12. 
on // add event listeners to take a selected element and attach an event listener to what has been slected
off // remove event listeners


// Exercises 2:

    // When the DOM is ready, console.log the message "Let's get ready to party with jQuery!"
    $(document).ready(function(){
        console.log("READY FOR ACTION");
    });
        //or
        $(function() {
            console.log("Let's get ready to party with jQuery!");
        }
    
    // Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
    $(document).ready(function(){
        var $articleImg = $("article img").addClass("image-center");
    })
    // Remove the last paragraph in the article.
    $(document).ready(function(){
        var $lastParagraph = $('div').last('p') // wrong
    })
    $("article p:last-child").remove(); // correct
        
    // Set the font size of h1 with an id of title to be a random pixel size from 0 to 100.
    $("h1 #title"),css("font-size", "100"); // random pixel size?
    $("#title").css("font-size", Math.random() * 100); // correct
    
    // Add an item to the list; it can say whatever you want.
    $("ol").append("text"); // target the ol, target the <li> in the append
    
    $("ol").append($("<li>", {text: "text within a li"}); // didn't even see the 'append($( ))`
    
    // Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.
    $("aside").empty
    
    
    // When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
    // Add an event listener so that when you click on the image, it is removed from the DOM.

    
    
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

// --=---=----==-----=----


// 9. 
// jQuery Animations
// Utilize jQuery animations to add additional dynamic behavior to a page
// Use common jQuery methods like fade / slide / hide / show to animate elements

// 9a an example of clicking on a paragraph or sections of the content to hide and display

$(document).ready(function(){
    $("article").hide();
    $("article").fadeIn(2000); // fade in over 2000 milliseconds (there are also animations for sliding as well)
    var toggleShow = true;
    $("article").on("click", function(){
        if(toggleShow){
            $("#edit_user").show();
        } else {
            $("#edit_user").hide();  
        }
        $(".items").slideToggle(500); // if hidden, then slideIn. If showing, then slideOut.
        toggleShow = !toggleShow;  // switch the value of the boolean  
    });
});

// 9b

// when you click the page the unordered list slides across the page and becomes more opacque while the header text follows in sequence and will be executed after.

// you can keep clicking it for it to recur

$(document).ready(function(){
    $(".items").click(function() {
      $("li").animate({
        // what properties to manipulate
        opacity: 0.5,
        marginLeft: "+=100",
      }, 5000, function() {
        // this code will be executed when the animation is complete
        $("p").css("font-size","+=5");
      });
    });
  });
  



// 10.
// you can make event listeners for elements that exist in the future with "event delegation". event propagation (bubbling) happens within "a higher level in the DOM" than from which the event originated
// you can make event listeners at parent eleemnts that work for the children element within them, for example a ul or ol on a li. 

$(function(){
    // pay CLOSE attention to the 2nd parameter
    $("ul").on("click", "li", function(e){
        console.log("You just clicked on ", $(this).text());
    });
});

on() // method, accepts three vs 2 argumetns. 

// .on( events [, selector ] [, data ], handler )
// 1st - the event listener
// 2nd - CSS selector which acts as a filter
// 3rd - Event delegation means that the callback for the vent gets passed as the third parameter.




// 11.
// output new divs
// the 2nd part of this 

$(function(){
    var count = 0;
    $("button").on("click", function(){
      var $newDiv = $("<div>", {
        text: "div number " + count
      });
      count++;
      $("#container").append($newDiv);
    });
    
    $("#container").on("click", "div", function(e){
       console.log("You just clicked on ", $(e.target).text());
    });
  });

// 12. 
// preventDefault vs stopPropagation
preventDefault() // method used to stop default behavior of forms from refreshing the page
  
$("#google").on('click', function(e) {
    e.preventDefault();
  });

  // prevent default prevents the behaivor of the link
  
  $("#yahoo").on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
  });
  
  // this didn't do anything, like they cancelled out
  // prevents the console.log

  $("#bing").on('click', function(e) {
    e.stopPropagation();
  });
  
  // this prevents a link from taking you to another page, and loads it internally


  
  
  
  
// 13.
// Selector Caching

// saving variables to be the same as DOM elements by using selectors and HTML ids 

<div id="container"></div>

<script>
$(function(){
    var $container = $("#container");

    $container.text("Hello World!");
    $container.css('color','red');
    $container.on("mouseenter", function(e){
      console.log("moused over!");
    });

    var $newDiv = $("<div>", {
      text: "I am a div!",
      css: {
        color: "green"
      }
    });

    $container.append($newDiv);
  });
</script> 
  
  
  // sidenote: callbacks
  
  let x = function(){
      console.log("something")
  };
  
  let y = funciton(clalback){
      console.log('y activated');
      callback();
  }
  y(x);
  
  
  let calc = function(num 1, num2, calcType){
      if (calcType === "add") {
          return num1 + num2;
      } else if (calcType === "multiply"){
          return num1 * num2;
      }
  };
  
  console.log(calc(2,3, 'add')); // why tf bother with add
  

// 14. 
// jQuery Iterators
each, map, filter // jQuery = forEach, map, filter JS methods for arrays

each // accepts a callback
  
  
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
