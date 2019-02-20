Intermediate JS


**Questions**
- what is AJAX?
- what is the native DOM API?


Intermediate 2 Checklist


# AJAX
what is the XHR object?

[Traversy Media 2017](https://www.youtube.com/watch?v=82hnvUYY6QA)

AJAX means "Asynchronous JS and XML". It's not a language, it's not a framework/library, but it's a set of technologies to send and receive data asyncrhonously to not interfere with the current web page. JSON ("jason") replaced XML. JSON for external APIs.

As the client you make a common request to the serve which gives you back a response. AJAX allows you to do this asynchronously which is a lot easier than reloading the entire page and making the things more intereactive. You can be working with HTTP libraries or APIs. The server returns data in JSON format this request is donethrough HTTP request object. For instance, if you click outside a form, it might intereact with the page to reload elements.

This is done through the XmlHttpRequeqst (XHR) Object. It is an object form API. ALl modern browsers have this API. IT transfers data between client and server. HTTTP is normally what it is used with

AJAX libraries include jQuery, Fetch API, Prototype, Node HTTP, and HTTP Axios

in one example you might have: 
```
// create event listener
document.getElementById('button').addEventListener('click', loadText);
// resulting function
function loadText(){
    console.log(`button clicked`);
}
```
link to another txt file like sample.txt
```
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
    
    // ready State change
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
```

Note: **HTTP statuses**
```
200: "OK"
403: "Forbidden"
404: "Not found"
```

Note: **readyState Values**
```
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
```



# jQuery
A JS library used for DOM manipulation, DOM, and JS libraries. jQuery gets replaced at the framework level (React, Angular, Vue).

Functions begin with `$`. This is an alias for jQuery.


- `$(document).ready` or `$(function(){)}` used to ensure the DOM has load
- note: on ready state change --> became on load


Note: // it's `vanilla` JavaScript and `legacy` CSS to describe unimproved languages.


- Example 5. shows how jQuery has native functions to replace vanilla JS DOM connections. Use `$` at the start of variable names to indicate  your use of jQUery.

 ----------
**objects**

Link: https://www.smashingmagazine.com/2014/05/mystery-jquery-object-syntax-basic-introduction/


- `var digger = {species:"gerbil", name:"Digger", color:"white"};`
    - In this example, the variable digger is an object, and we have assigned it three subvariables: species, name and color. In object-oriented jargon, these are known as *member variables*.
- Functions can be assigned to member variables.
    - ```
        digger.speak = meepMeep;
        digger.speak();
        ``` 
    - FUCK I thought i was gonna learn something... this is just a method. gDangit.
    
- there is a difference between selecting the element `$("footer");` and the id `$("#container")` that starts with the two " ". 
- Select the third li inside of the div with a class of list-container.
    - `$(".list container li:nth-child(3)");`
    
 ----------
**manipulating and modifying**

There's a difference between setters and getters. Setters set the value within them, while getters return them.

*html / text / val*

- getters
    ```
    $(document).ready(function(){
        $("article").html(); // innerHTML
        $("article").text(); // innerText
        $("input").val(); // value
    });
    ```

- setters
    ```
    $(document).ready(function(){
        $("article").html("<h1>Here's some large text.</h1>"); // innerHTML
        $("li").text("hi!"); // innerText
        $("input").val("new value"); // value = new value
    });
    ```

    
    

 ----------
**callbacks**
Remember a callback function passed as an argument to another function executed after its parent has completed. 

- `$.get( "myhtmlpage.html", myCallBack );`
    - execute a function `myCallBack` after the HTML page loads.
- `$.get( "myhtmlpage.html", myCallBack( param1, param2 ) );`
    - this doesn't work because myCallBack(p1,p2) is immediately executing. It's like as if it breaks PEMDAS or some shit.
    - defer the execution with an anonymous function wrapper.
    - ``` 
        $.get( "myhtmlpage.html", function() {
            myCallBack( param1, param2 );
        }); 
        ```
    - 





**J**

