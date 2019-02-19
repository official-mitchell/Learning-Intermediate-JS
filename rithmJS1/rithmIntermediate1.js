

// Errors https://www.rithmschool.com/courses/intermediate-javascript/javascript-debugging-errors

    // errors are objects created by a function called console.error();

    // error objects thrown when runtime errors occur
        // runtime errors mean something like var 8 = 9;
    
    // JavaScript contains built-in errors?
    
    // Common Errors
        // SyntaxError - mistake with syntax, like a comma inside an object
        
        // ReferenceError - when trying to access variable that does not exist in scope
        
        // TypeError - make incorrect use of types, invoking something that isn't a function or
            // accessing properties that are not defined
            // if you try and access a property on and object and it does not exist, you get undefined
        
        // RangeError - when a function calls itself, causing a memory crash
            // recursive function
            
            
        // What is the difference between a TypeError and ReferenceError?
            // TypeErrors occur when JavaScript is unable to perform a certain operation on a data 
            // type (invoking something that is not a function, accessing properties on something 
            // that is not an object). ReferenceErrors occur when JavaScript does not have a reference 
            // to the variable in memory (accessing a variable that is not defined or not in the current 
            // or outer scope)
            
            
    // Try and Catch statements - throwing and catching errors
        // create a try block, if the error is thrown, the code moves to the catch block
        
        try {
            thisDoesNotExist;
        } catch(e) {
            console.log("The error is ", e);
        }
        
    // Throw error - returns an error and stops code execution
        throw ReferenceError("Variable DNE");
        throw "also an error";
        
            // What does the throw keyword do? The throw keyword allows you to return an error/exception of your choice
        
        
    // use throw, try, catch
    
        try {
            if (Math.random() >= .5) {
                throw "Let's make an error!";
            }
            console.log("check");
            console.log("We can only get here if the random number is less than .5");
        } catch(e) {
            console.log("The error is ", e);
            console.log("Get here if an error was thrown RNG > .5");
        } finally {
        console.log("Moving on...");
        }
    // finally
        // used for something to execute despite try and catch
        
// Chrome Developer tools
        
    about:blank
    
    // Sources tab > Snippets
    // CMD + enter for running
    // create breakpoints
        // click on the number at the line number
        // debuggers run up to the breakdpoint
        // click arrow at the top to move to the next breakpoint
        
    // write debugger to pause code
    
    for(vari i = 0; i < 5; i++) {
        debugger
        if(1 % 2 == 0) {
            console.log("1 even");
        }
    }
    
        // need a better tool for debugging
   
        
        // you'll get "exceptions" that are errors occuring within programs.
        // you can click to pause on exceptions.
            // caught exceptions are errors evaluated in a try/catch block.
       
            
        // practice catching errors. You basically throw in something that will return an error to figure out
        // the shit wrong with it
        
            try {
                undefined()
             } catch(e){
                 console.log("We just made a TypeError, we can learn more using the error object returned to us:", e);
             }
        
        
    // Error exercises
        
        // 1.
        person;
            // undefined object
            // Type of error - ReferenceError
        
        // 2.
        var data = {};
        data.displayInfo();
            // used the improper syntax for creating an array
            // no function declaration
            //Type of error - TypeError Why - The value of data.displayInfo is undefined, 
            // so we are invoking undefined which we can not do. Undefined is not a function
            
        // 3.
        var data = {};
        data.displayInfo.foo = "bar";
            // there's no sub value equalling "foo"
            // Type of error - TypeError Why - **We are trying to assign a property of foo on 
            // undefined. Undefined is not an object so we can not do that. **
            
        // 4.
            function data(){
                var thing = "foo";
            }    
            data();
            thing;
                // Type of error - ReferenceError Why - The thing variable is only available in the scope of the data function. 
                // We are trying to access it out of scope and JavaScript does not have a reference to it
            
        // 5. 1
            for(var i=0; i < 5; i++){
                console.log(i);
            }
                // fixed the > to < in line 1
        // 6. 2
            function addIfEven(num){
                if(num % 2 === 0){
                    return num + 5;
                }
                return num;
            }
                // need to fix line 2, there's an assignment versus a comparison
                
        // 7. 3
            function loopToFive(){
                for(var i=0; i < 5, i++){
                    console.log(i);
                }
            }
                // improper syntax with , instead of ; in the for loop
        //8. 4 ?? Need help on using breakpoints better 
            function displayEvenNumbers(){
                var numbers = [1,2,3,4,5,6,7,8];
                var evenNumbers = [];
                for(var i=0; i < numbers.length--; i++;){
                                                    // uncaught error, unexpected token
                    if(numbers % 2 = 0); {
                                        // reference error, invalid left hand side
                        evenNumbers.push(i);
                    }
                    return evenNumbers;
                }
            }
            displayEvenNumbers(); // should return [2,4,6,8] 
            
            // HINT - eight things need to be changed here for this to work!
            // Start by fixing the syntax errors and then run the function to see what your output is.
        
            function displayEvenNumbers(){
                var numbers = [1,2,3,4,5,6,7,8]
                var evenNumbers = []
                for(var i=0; i<numbers.length-1; i++){
                        // reference token
                    if(numbers[i] % 2 === 0){
                        evenNumbers.push(i)
                    }
                }
                return evenNumbers;
            }
            displayEvenNumbers()
            
            
// Nested Objects

        // data structure
            // the most efficient way to store data depends on the intended use of the data
            
        // objects within objects
        
            var schools = {
                gT: {
                    address: "scriptAddress",
                    numberThing: 13
                }
            };
            
            // access with dot notaiton
            
            var gT = schools.gT;
            
            gIT.address;
            gIT.numberThing;
            
            // or
            
            schools.gT
    
    // arrays within objects
    
        var instructorData = {
            name: "Tim",
            favoriteHobbies: ["something", "yes"]
        };
        
        // use an array to access array data within an object
        
            instructorData.favoriteHobbies[0];
            
            instructorData.favoriteHobbies.push("newArrayObject");
            
    // Complex Objects
    
        var instructorData = {
            name: "Elie",
            additionalData: {
                instructor: true,
                favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
                moreDetails: {
                    favoriteBasketballTeam: "New York Knicks",
                    numberOfSiblings: 3,
                    isYoungest: true,
                    hometown: {
                        city: "West Orange",
                        state: "NJ",
                    },
                    citiesLivedIn: ["Seattle", "Providence", "New York"]
                }
            }
        };
        
        instructorData.name; // "Elie"
        instructorData.additionalData.instructor; // true
        instructorData.additionalData.favoriteHobbies[2]; // "Coding"
        instructorData.additionalData.moreDetails.favoriteBasketballTeam; // "New York Knicks"
        instructorData.additionalData.moreDetails.hometown.state; // "NJ"
        instructorData.additionalData.moreDetails.citiesLivedIn[1]; // "Providence"
        
        // it is super fucking important to know how to work with nested arrays and objects
        
    // Accessing and Setting values in nested objects
    
        // dot notation is great for accessing values in nested objects when oyu know exactly the name of the key
        // when you don't know exactly the key, you need to use bracket notation
        
        var programmingLanguages = {
            java: {
                yearCreated: 1995,
                creator: "James Gosling"
            },
            javaScript: {
                yearCreated: 1995,
                creator: "Brendan Eich"
            }
        }
        
        function addProgrammingLanguage(nameOfLanguage, yearLanguageCreated, creatorOfLanguage){
            // how can we access the programming languages object?
            // We can't use dot notation, because we don't know the name of
            // the key until the function is called.
            // Instead we use bracket notation where the key is the
            // nameOfLanguage that is being passed to the function.
            programmingLanguages[nameOfLanguage] = {
                // Creating the object which will be the value of the
                // key.  We can directly assign the yearLanguageCreated
                // and creatorOfLanguage to the appropriate keys here.
                yearCreated: yearLanguageCreated,
                creator: creatorOfLanguage
            }
        }
        
        // Usage example: Adding a key of ruby to the programming language object,
        // with the value of 1995 for the key "yearCreated" and the value
        // "Yukihiro Matsumoto" for creatorOfLanguage
        addProgrammingLanguage("ruby", 1995, "Yukihiro Matsumoto");
        
        
        // basically creates a function for adding new programming languages that accepts parameters to fill out the object
            // let's get a repeat on that bitch
            
        function addProgrammingLanguage(languageName, languageYearCreated, languageCreator){
            programmingLanguages[languageName] = {
                yearCreated: languageYearCreated,
                creator: languageCreator,
            }
        }
        
        addProgrammingLangauge("Solidity", 2014, "Vitalik")
        
        // QUESTION. What happens if there's multiple values for one variable...
        
    // Writing functions to produce values in a nested data structure
    
    
    // Exercises
    
        // given
        var instructorData = {
            name: "Elie",
            additionalData: {
                instructor: true,
                favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
                moreDetails: {
                    favoriteBasketballTeam: "New York Knicks",
                    numberOfSiblings: 3,
                    isYoungest: true,
                    hometown: {
                        city: "West Orange",
                        state: "NJ",
                    },
                    citiesLivedIn: ["Seattle", "Providence", "New York"]
                }
            }
        };
        
        
    // strategy: store nested information in a variable to avoid typing it multipel times
        
        // 1. displayCities to console log out the values... okay confused now
        
                // console.log(instructorData.additionalData.citiesLivedIn)
                
                // function displayCities(name){
                //     for(var i = 0; i < instructorData.additionalData.citiesLivedIn.length; i++){
                //     var name[i] = instructorData.additionalData.citiesLivedIn[i];
                //     }
                    
                // for(var i = 0; i < instructorData.additionalData.citiesLivedIn.length; i++){
                //     console.log(instructorData.additionalData.citiesLivedIn[i])
                // }
                // }
        
            // correct answer
                function displayCities(){
                    var cityArray = instructorData.additionalData.citiesLivedIn;
                    for(var i = 0; i < cityArray.length; i++){
                        console.log(cityArray[i]);
                    }
                }
        
        
        // 2. displayHometownData ... not getting it
        
                    // function displayHometownData( ) {
                    //     console.log
                        
                    //     var hometowns = instructorData.additionalData.moreDetails.hometown(city, state)
                        
                    //     hometowns[hometown] = {
                    //         city: cityName,
                    //         state: stateName
                    //     }
                        
                            // was trying to make a composite variable where you could console log hometowns
                    // }
                    
            // correct answer
            function displayHometownData(){
                var hometowns = instructorData.additionalData.moreDetails.hometown;
                for(var key in hometowns){
                    console.log(hometowns[key]);
                }
            }
                // FIX need to remember the fact that you can use the keyword "key" to search through the objects 
        
        // 3. addDetail
            //given
            addDetail("isHilarious", true);
            /*
            {
                favoriteBasketballTeam: "New York Knicks",
                numberOfSiblings: 3,
                isYoungest: true,
                hometown: {
                    city: "West Orange",
                    state: "NJ",
                },
                citiesLivedIn: ["Seattle", "Providence", "New York"],
                isHilarious: true
            }
            */
            addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
            /*
            {
                favoriteBasketballTeam: "New York Knicks",
                numberOfSiblings: 3,
                isYoungest: true,
                hometown: {
                    city: "West Orange",
                    state: "NJ",
                },
                citiesLivedIn: ["Seattle", "Providence", "New York"],
                isHilarious: true
                previousApartments: ["Mission", "North Beach", "Nob Hill"]
            }
            */
           
            function addDetail(addedKey, addedValue) {
                someObj.push(addedKey[addedValue])
            }            
        
            // close
                // very unsure
                
                // answer
                function addDetail(key, value){
                    var detailsObject = instructorData.additionalData.moreDetails;
                    detailsObjects[key] = value;
                    return detailsObject;
                }
                
                    // creates an object for the path, I guess I didn't realize that we were using instructorData and moreDetails
                
        // 4. remove detail
                function removeDetail(key, value){
                    var toBeRemoved = instructorData.additionalData.moreDetails;
                    delete detailsObject[key];
                    return detailsObject;
                }
                
                
                
                
                
                
                
// More Nested Objects Exercises https://www.rithmschool.com/courses/intermediate-javascript/javascript-nested-data-structures-objects-exercises


    // 1.
        var nestedData = {
            innerData: {
            order: ["first", "second", "third"],
            snacks: ["chips", "fruit", "crackers"],
            numberData: {
                primeNumbers: [2,3,5,7,11],
                fibonnaci: [1,1,2,3,5,8,13]
            },
            
            // AYO wtf is this shit. 1. new function style, 2.this
            addSnack: function(snack){
                this.snacks.push(snack);
                return this;
            }
            }
        }
        
            // 1a. Using a for loop, console.log all of the numbers in the primeNumbers array.
            
                function loopPrimeNumbers(){
                    var primeNumbersToLoop = nestedData.numberData.primeNumbers;
                    for(i = 0; i < primeNumbersToLoop.length; i++){
                        console.log(primeNumbersToLoop);
                    }
                
                }
            
            // 1b. Using a for loop, console.log all of the even Fibonnaci numbers.
                function checkForEvens(){
                    var fibonnaciToCheck = nestedData.numberData.fibonnaci;
                    for(i = 0; i < fibonnaciToCheck.length; i++){
                        if(fibonnaciToCheck[i] % 2 === 0){
                            console.log(fibonacciToCheck[i]);
                        }
                    }
                }
            
            
            // 1c. Console.log the value "second" inside the order array.
                function secondLog(){
                    var second = nestedData.innerData.order[1];
                    console.log(second)
                }
            
            // Invoke the addSnack function and add the snack "chocolate".
                nestedData.addSnack("chocolate");
            
            // Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?
            
                // "this" refers to snack (the argument... or does it) fuck idk man
                
    // 2. Adding to nested Objects --- need help here
    
    var nestedObject = {
        speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
            // WTF is this shit?
        data: {
          continents: {
            europe: {
              countries: {
                switzerland: {
                  capital: "Bern",
                  population: 8000000
                }
              }
            }
          },
          languages: {
            spanish: {
                hello: "Hola"
            },
            french: {
                hello: "Bonjour"
            }
          }
        }
      }
      
        // Add Speaker
        
        function addSpeaker(name){
            var speakersArray = nestedObject.speakers;
            speakersArray.push(name)
        }
            // ... ? confused need to review objects at this point
        
            // solution
            
            function addSpeaker(speakerNamer){
                nestedObject.speakers.push({
                    name: speakerName
                })
        }
            
        
        // addLangauge
            function addLanguage(langauge, heloInLanguage){
                nestedObject.data.lanaguages[language] = {
                  hello: helloInLanguage  
                }
            }
                
                // without any prior setup, he calls the Spanish and French under languages as "language"
        
        
        // addCountry - 
        
            function addCountry(countryName, countryCapital, countryPop){
                nestedObject.data.continents.europe.countries[countryName] = {
                    capital: countryCapital,
                    population: countryPop
                }
            }
        
            // FUCK YEAHHHH LET"S GOOOOO
            
            
            
            
            
            
            
// Nested Arrays https://www.rithmschool.com/courses/intermediate-javascript/javascript-nested-data-structures-arrays

    // Multidimensional Arrays
        // an array with subarrays
        
        var myFirstSubarray = [["this", "is"], ["super", "cool"]];
        
        // to print all values, need to loop inside a loop
        
                var nestedArr = [[1, 2], [3, 4]];
                for (var i = 0; i < nestedArr.length; i++) {
                console.log(nestedArr[i]);
                }

                // this will log out...
                // [1,2]
                // [3,4]

        // challenge, print out individual values (1,2,3,4) versus [1,2] [3,4]
        // use two counters, i and j (for the inner)
        
                var nestedArr = [[1, 2], [3, 4]];
                for (var i = 0; i < nestedArr.length; i++) {
                for (var j = 0; j < nestedArr[i].length; j++) {
                    // notice that we are going inside the outer array
                    // and now inside of the inner array
                    console.log(nestedArr[i][j]);
                }
                }
                
                // this will log out...
                // 1
                // 2
                // 3
                // 4
                
        // model game boards like nested arrays
        
        
            // printEvens
        
                var nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];

                printEvens();
                
                // 2
                // 4
                // 6
                // 8
                // 10
                // 12
                
            for(var i = 0; i < nestedArr.length; i++){
                for(var j = 0; j < nestedArr.length[i]; i++){
                    if(nestedArr[j] % 2 === 0) {
                        console.log(nestedArr[j])
                    }
                }
            }
            
            
            // sumTotal
            
            function sum(){
                for(var i = 0; i < nestedArr.length; i++){
                    for(var j = 0; j < nestedArr.length[i]; i++){
                        var sumOfArr = nestedArr[j] +=;
            }
            
            
            function sumTotal() {
                var total = 0;
                            // declares a total variable
                for (var i = 0; i < nestedArr.length; i++) {
                  for (var j = 0; j < nestedArr[i].length; j++) {
                    total += nestedArr[i][j];
                            // he's able to nestedArr[i] & [j] in go and have it equal the toal
                  }
                }
                return total;
                    // he then returns it
              }
              
                // close
                
        
            // countVowels
            
            var arr = [];
            Array.isArray(arr); // true
            Array.isArray("Hello"); // false
            
            var nestedArr = [
              "Elie",
              ["Matt", ["Tim"]],
              ["Colt", ["Whisky", ["Janey"], "Tom"]],
              "Lorien"
            ];
            
            countVowels(); // 13
            
    // check if something is an arry with the Array.isArray();
    
                function countVowels(){
                    var totalVowels = 0;
                    .toLowerCase
                    for[i]
                        for[j]
                            if [i][j] is between values
                                totalVowels += [i][j]
                }
                    // my expected thought process. let's see this shit
                    
            // excellent use case for recursion.... okay this was much harder
            
            function seeIfVowel(char, count) {
                var vowels = "aeiou";
                if (vowels.includes(char.toLowerCase())) {
                  return ++count; // add 1 to count then return the value (this is called a prefix operator)
                }
                return count;
              }
              
              function countCharacters(str, count) {
                for (var i = 0; i < str.length; i++) {
                  count = seeIfVowel(str[i], count);
                }
                return count;
              }
              
              function countVowels(arr) {
                var count = 0;
                for (var i = 0; i < arr.length; i++) {
                  if (Array.isArray(arr[i])) {
                    for (var j = 0; j < arr[i].length; j++) {
                      if (Array.isArray(arr[i][j])) {
                        for (var k = 0; k < arr[i][j].length; k++) {
                          if (Array.isArray(arr[i][j][k])) {
                            for (var l = 0; l < arr[i][j][k].length; l++) {
                              count = countCharacters(arr[i][j][k][l], count);
                            }
                          } else {
                            count = countCharacters(arr[i][j][k], count);
                          }
                        }
                      } else {
                        count = countCharacters(arr[i][j], count);
                      }
                    }
                  } else {
                    count = countCharacters(arr[i], count);
                  }
                }
                return count;
              }
              
              function countVowelsEasier(arr) {
                var str = arr.toString();
                var count = 0;
                count = countCharacters(str, count);
                return count;
              }
              
              
              
              
              
              
              
// Nested Array Exercises https://www.rithmschool.com/courses/intermediate-javascript/javascript-nested-data-structures-arrays-exercises

        // rotate - takes an array, moves each element however many spaces the number is to the right
            
            rotate([1,2,3], 1) // [3,1,2]
            rotate([1,2,3], 2) // [2,3,1]
            rotate([1,2,3], 3) // [1,2,3]

            function rotate(arr){
                var newArr = [];
                // there was a way to start from the back of an array but I forgot
                take the end of the array
                for(i = 0; i < arr.length; i++){
                    newArr += arr[i][j]
                }   
            }
            
                // answer this is hard
                function rotate(arr, num){
                    var amount = num % arr.length;
                        
                    for(var i=0; i < amount; i++){
                        arr.unshift(arr.pop{});
                    }
                return arr;
                }
                
            
            
        // makex0Grid - i don't even know where to start
            // this one is hard
            
            function makeX0Grid(rows,columns){
                var columns = 0;
                var rows = 0;
                
            }
            
            function makeXOGrid(rows,amount){
                var finalArr = [];
                var startWithX = true;
                for(var i=0; i<rows; i++){
                    var newRow = [];
                    for(var j=0; j<amount; j++){
                        if(startWithX){
                            newRow.push("X")
                        }
                        else {
                            newRow.push("O")
                        }
                        startWithX = !startWithX
                    }
                    finalArr.push(newRow)
                }
                return finalArr;
            }
              
                
// Higher Order Functions https://www.rithmschool.com/courses/intermediate-javascript/javascript-higher-order-functions
    // parameters can be functions
    // not all languages allow other functions to serve as parameters to functions
    
    // example
    function sendMessage(message, fn){
        return fn(message);
    }
    sendMessage("Hello World", console.log); // Hello World
    sendMessage("Hello World", alert); // Hello World is alerted
    sendMessage("What is your name?", prompt); // value from prompt is returned
    sendMessage("Do you like JavaScript?", confirm); // true or false is returned
    )

    // difference between referenced and invoked functions
        // ("Hello World", console.log) - referenced, but not invoked. Nothing written to console.
        
    
        fn(message) // invokes a function //
            // fn used with parenthesis invokes the function 
            
    // Anonymous Functions as parameters work too
    
        sendMessage("Hello World", function(message){
            console.log(message + " from a callback function")
        }); // Hello world from a call back function
    
        // is the same as
        
        var myFunction = function(message){
            // message refers to the string "Hello World"
            console.log(message + " from a callback function!");
        };
        
        sendMessage("Hello World", myFunction);
        
    // higher order functions are better at reusable code   
    
// Use Case: simplicity

        // before
        
        function sendMessageWithConsoleLog(message){
            return console.log(message);
        }
        
        function sendMessageWithAlert(message){
            return alert(message);
        }
        
        function promptWithMessage(message){
            return prompt(message);
        }
        
        function confirmWithMessage(message){
            return confirm(message);
        }
        
        function sendMessageWithFromCallback(message){
            return console.log(message + " from a callback function!");
        }
        
        // 5 separate functions
        
        // now you can write one and pass another function to it
        // a function passed as an argument to a higher order function is calld a callback
        
    // callback function passed to a higher order function and can be invoked by the higher order function
    
        // new example
        function add(a,b){
            return a+b;
        }
        
        function subtract(a,b){
            return a-b;
        }
        
        function math(a,b,callback){
            return callback(a,b);
        }
                // right here. that callback lets you put the function name into the parameter
                
        math(1,4,add); // returns 5
        math(5,5,subtract); // returns 0
        
        /* 
        as we start making additional functions that perform operations on
        two numbers we can pass them to the math function. So if we make a
        divide or multiply function we can call all of them just using the
        math function.
        */
       
        
    // practice
    
        function each(arr, callbackFn){
            for(var i=0; i < arr.length; i++){
                fn(array[i]);
            }
        }
        
            // each([1,2,3,4], function(val){
                console.log(val*2);
            });
        
        each is the higher order function
        
        
    // map ???
    
            function map(arr, callbackFn){
                for(var i=0; i < arr.length; i++){
                    return arr[i];
                }
            }
            
    // reject ?
    
            function reject(arr, callbackFn){
                for(var i=0; i < arr.length; i++){
                    if(callbackFn === false){
                        return false;
                    }
                    return true;
            }
            
            
            
            
            
            
// Timers https://www.rithmschool.com/courses/intermediate-javascript/javascript-timers

    // both setInterval and setTimer accept a callback function and ms as parameters.
    // setTimeout - function exectuion once
    // set interval - infinite times
    
    
    // JS is single threaded - only one process will happen at a time
    // other languages allow you to create your own threads - multithreading
    // asynchronous code gives the impression multiple things are happening at once
    
    // call stack - where function calls are put (each one is a "stack frame")
    // the call stack is a LIFO data straucture
    // functions beneath others in the stack cannot be executed until the function ontop has come off
            // either return-ing some value or execuiting all the code
            
    // event queue - asynchronous events get put into this moved to the stack when the stack is clear
    // queue is a list of messages to be processed, a function associated with each one, with an empytied stack, messages are taken out of queue and processed
        // messages call the associated functon
        // message processing ends creating the new initial stack frame
        // message processing ends when the stack becomes empty
        // message processing is a FIFO data structure
    
    // heap - objects stored here, unorganized memory
    
    // event loop - checks the queue and looks for processes to execute
    
        // example
        console.log("first");
        setTimeout(function(){
            console.log("second");
        },0);
        console.log("third");        
        
        // the first log function goes on the stack, prints out "first," and then it goes off,
        // a message is sent to the queue to log "second" in 0 milliseconds
        // during that time, another log function comes on the stack and prints out "third"
        // now the stack is clear so the callback to the setTimeout goes on the stack and "second" is printed
        
        
        
        
        
        
// Closures
        
    // closure - when a function is able to access variables from an "outer function" which already return'd
        // JS is able to remember variables defined in functions even if those functions have return'd
        https://vimeo.com/184169933
        
        // example
        function addTo (passed){
            var inner = 2;
            return passed + inner;
        }
        console.log(addTo(3));
        // 5
                // means the "passed" variable in the function is returned plus the inner. Yeah that makes sense
        
        // but you don't have to pass it
        
        var passed = 3;
        function addTo (){
            var inner = 2;
            return passed + inner;
        }
        console.log(addTo());
            // this is a closure
            
        // lexical scoping - anything defined outside is automatically avialable inside the function
        // the answer is closure

        function addTo(passed){ // outer function
            function add(inner){ // inner function
                return passed + inner;
            };
            return add;
        };
        
        
        // use case - "private variables" - variables that cannot be directly accessed and overwritten
        
        function defineAge(){
            var age = 28;
            return function growUp(){
                return ++age;
            }
        }
        
        var ageOnce = defineAge();
        ageOnce(); // 29
        ageOnce(); // 30
        
        // only the defineAge function can access the variable age
        // the growUp function as access through the closure to the age variable
        // growUp (the inner function) has "closeure over the scope of" defineAge
        
    // class
    
        // example
        function createInstructors(){
            var instructors = ["Elie", "Matt", "Tim"];
            return {
                showInstructors: function displayAllInstructors(){
                    return instructors;
                },
                addInstructor: function addNewInstructor(instructor){
                    instructors.push(instructor)
                    return instructors;
                }
            }
        }
        
        var firstClass = createInstructors();
        firstClass.addInstructor("Jennifer");
        firstClass.showInstructors(); // ["Elie", "Matt", "Tim", "Jennifer"]
        
        var secondClass = createInstructors();
        secondClass.addInstructor("Ashley"); // ["Elie", "Matt", "Tim", "Ashley"]
        
        // on one line
        
        var instructors = createInstructors().showInstructors(); ["Elie", "Matt", "Tim"]
        
        // this guy basically just created variables that stored functions and made them equal to the outer function
        
        // now we want to write something that without calling createInstructors()
        // do createInstructors.showInstructors()
        // use IIFEs - immediately invoked function expression(s)
        
        // IIFEs --> module pattern
        var instructorModule = (function createInstructors(){
            var instructors = ["Elie", "Matt", "Tim"];
            return {
                showInstructors: function displayAllInstructors(){
                    return instructors;
                },
                addInstructor: function addNewInstructor(instructor){
                    instructors.push(instructor)
                    return instructors;
                }
            }
        })();
                    // my question is why have these functions pointing to other functions inside the return... what is this called?
                        // and what's the benefit?
                            // like why wouldn't you have
                            return {
                                function displayAllInstructors(){},
                                function addNewInstructor(){}
                            }
                // my idea is that there is something about the object of "return" that provides a benefit... but I don't know what that is
    
        // creates a small "module" - piece of code encapsulated for reuse.
            //format for the code is called the "modlule pattern"
            // wrap everythign in an IIFE containing "private" data to not be accessed globally
            
    // refactored on step further
    
    var instructorModuleRefactored = (function createInstructors(){
        var instructors = ["Elie", "Matt", "Tim"];
        function displayAllInstructors(){
            return instructors;
        }
        function addNewInstructor(instructor){
            instructors.push(instructor);
            return instructors;
        }
        return {
            showInstructors: displayAllInstructors,
            addInstructor: addNewInstructor
        }
            // so I was partially right in my previous complaints... this is the way to do it.
            // are showInstructors and addInstructors keys of return then?
    })();
        
    // another good example
    
        function counter(){
            var count = 0
            return function(){
                return ++count
            }
        }
        
        // in console create "classes" of the same variable
        counter1 = counter()
        counter2 = counter()
        
        counter1() // 1
        counter1() // 2
        
        counter2() // 1
        
        count // reference error
        
    
// NOTE: in the console you can call a function outer and inner by doing something like
    outer()()     
          
    // arguments keyword
    
    function logAll(){
        console.log(arguments);
    }
    
    logAll(2,2); // [2,2]
    logAll(10,5,4); // [10,5,4]
    logAll(1); // [1]
            // these look like arrays?
    
    function displayFirstArgument(){
        return arguments[0];
    }
    
    displayFirstArgument(10,20); // [10]
    displayFirstArgument(true); // [true]
    displayFirstArgument(); // []
    
    // arguments are not an array
    // has the length property, but it is a special kind of object
    
    // manipulating arguments is useful for when someone may pass several to your function
    
        function add(){
            var total = 0;
            for (vari i = 0; i < arguments.length; i++) {
                total += arguments[i];
            }
            return total;
         }
         // makes sense
         
         
         
         
         
         
         
// Higher Order Functions, Timers, Closures Exercises: https://www.rithmschool.com/courses/intermediate-javascript/javascript-hof-timers-closures-exercises

         // 1. Countdown  
                        //  function countdown(number) {
                        //      if(number ==! 0){
                        //         setInterval({
                        //             function decrementNumber(){
                        //                 var decremented = number--;
                        //                 console.log(decremented)
                        //             }, 1000) 
                        //      } else {
                        //          console.log("Done!");
                        //          return;
                        //         }
                        //      }
                        //     }

            function countDown(time){
                var timer = setInterval(function(){ // created a variable for timer // called setInterval at a different point
                    time--;
                    if (time <= 0){
                        clearInterval(timer); // specified the timer variable
                        console.log('Done!');
                    }
                    else {
                        console.log(time); // no need for the return
                    }    
                }, 1000)
            }
            
                     
            var timerId = setInterval(function(){
                console.log("HI!");
            },1000);
            
            setTimeout(function(){
               clearTimeout(timerId);
            },3000);

        
        // 2.randomGame
                   
        
        function randomGame(){
            var timerID = setInterval(function(){
                var counter = 0; // needs to be set in the outer function
                var counter++; // correct
                var newNumber = Math.random(); // correct
                if(newNumber > .75){
                    clearInterval; // needs clearInterval(timerID)
                    return counter; // needs to be "It took " + counter + " tries.";
                }
            }, 1000);
            
            function randomGame(){
                var num;
                var times = 0;
                var timer = setInterval(){
                    num = Math.random);
                    times++;
                    if(num > .75){
                        clearInterval(timer);
                        console.log("It took " + times + " tries.");
                    }
                }, 1000)
            }
            
            
        // 3. isEven
        
        function isEven(number){
            if(number % 2 === 0){
                return true;
            } else {
                return false;
            }
        }
        
            // simplify
            
                function isEven(num){
                    return num % 2 === 0;
                }
        
        
        // 4. isOdd
        
        function isOdd(number){
            if(number % 2 ==! 0){
                return true;
            } else {
                return false;
            }
        }
        
        // 5. isPrime
        
        function isPrime(number){
            if(number % 2 ==! 0 && ){ // another condition is needed here for being divided in whole by itself and
                return true;
            } else {
                return false;
            }
        }
        
            // solution
            
            function isPrime(value){
                for(var i = 2; i <= Math.sqrt(value); i++){
                    if(value % i === 0){
                        return false;
                    }
                }
                return value > 1;
            }
        
                // HAH that one still fuggin McSucceronis
        
        // 6. numberFact
        
        function numberFact(num, fn){
            return fn(num);
        }
                // all that was needed lol
        
        
        function numberFact(number, fn){
            function isEven(number){
                if(number % 2 === 0){
                    return true;
                } else {
                    return false;
                }
            }
            function isOdd(number){
                if(number % 2 ==! 0){
                    return true;
                } else {
                    return false;
                }
            }
            function isPrime(number){
                if(number % 2 ==! 0 && ){ 
                    return true;
                } else {
                    return false;
                }
            }
            
        }
        
        // 7. find
        
        function find(array, fn){
            
            for(i = 0; i < array.length; i++){
                if(array[i] === fn){
                    return array[i]
                }
            }
        }
        
        function find(arr, fn){
            for(var i=0; i < arr.length; i++){
                if(fn(arr[i])) return i; // this one line right here is some fugginn shit
            }
        }
        
        // 8. findIndex
        
        function find(array, fn){
            
            for(i = 0; i < array.length; i++){
                if(array[i] === fn){
                    return i;
                }
            }
        }
        
        function findIndex(arr, fn){
            for(i = 0; i<arr.length; i++){
                if(fn(arr[i])) return [i]; 
            }
        }
        
        
        // 9. specialMultiply
        
        function specialMultiply(a,b){
            
            // ??? If the function is passed both parameters, 
            var product = a * b;
            
            function multiply(){
                if(arguments === ) {
                    return product;
                }
                return;
            }
        }
        
        function specialMultiply(a,b){
            if(arguments.length === 1){ // so what's happening is that the function can take two parameters
                // but the function will only multiply 
                return function(b){
                    return a*b;
                }
            }
            return a*b;
        }
            // nah this one is still confusing
        

                        // // manipulating arguments is useful for when someone may pass several to your function

                        // function add(){
                        // var total = 0;
                        // for (vari i = 0; i < arguments.length; i++) {
                        //     total += arguments[i];
                        // }
                        // return total;
                        // }
                        
                        
                        // var instructorModuleRefactored = (function createInstructors(){
                        //     var instructors = ["Elie", "Matt", "Tim"];
                        //     function displayAllInstructors(){
                        //         return instructors;
                        //     }
                        //     function addNewInstructor(instructor){
                        //         instructors.push(instructor);
                        //         return instructors;
                        //     }
                        //     return {
                        //         showInstructors: displayAllInstructors,
                        //         addInstructor: addNewInstructor
                        //     }
                        
                        
                        
// Introduction to the DOM: https://www.rithmschool.com/courses/intermediate-javascript/javascript-dom-introduction
// references to rithmIntermediate1.html start here

    // Remember the DOM is the programming interface for HTML, XML, and SVG docs
    // DOM defines methods allwoing access to the tree
    // DOM rpresents the document as a structured group of nodes and objects
    
    // to access the DOM use the document object
    
    
    
    // introduction to events
    
    
    // event objects
    
    
    
// Local Storage https://www.rithmschool.com/courses/intermediate-javascript/javascript-dom-local-storage

    // localStorage stores info in the browser for a specific domain
    // API is easy to use
    
    // sessionStorage - maintains a separate storage area for each given origin that's available for the 
        // duration of the page session (as long as the browser is open, including page reloads and restores)
        
    // localStorage - does the same thing, but persists even when the browser is closed and reopened
    
// question: what is the Window object?
// question: what is IFrames?

        // local storage versus session storage
        
        
            // local storage alows you to access a local Storage Object, and is similar ot sessionStorage.
            // while data stored in local Storage has no expiration time, data stored in sessionStorage gets cleared when the browsing session ends
            
            // sessionStorage maintains a separate storage area for each given origin that's available for the duration of the page session (reloads and restores)
            // localSTroage persists when browser is closed and reopened
            
            // all keys must be strings
            // working with primitives here
            
            setItem() // set something into localStorage
            getItem() // retrieve something stored
            
            localStorage.setItem("instructor", "Elie");
            
            localStorage.removeItem() // deletes a key
            localStorage.clear() // clear everything from local storage
            
            
    // adding objects to storage
    
        var instructors = ["Elie", "Matt", "Tim"];
        
        localStorage.setItem("instructors", instructors);
        localStorage.getItem("instructors");
        
        // everything is getting converted into a string instead of an array
        
    // AND THIS IS WHERE JSON COMES IN
    
        // JSON - JavaScript Object Notation - data interchange format attempting to be easy for humans to read and write, and for
            // machines to parse and generate
            
        // JavaScript has a built in JSON object, two methods used to convert JS data to JSON, and to parse JSON strings into JS
        
        // The JSON object itself can't be called or constructed
        // has no functionality on its own other than two methods:
        
            JSON.stringify() // used to convert JS to JSON
            JSON.parse() // parses a string as JSON
            
        // preserve intended data structure when it is soemthing other than a string
        
            var instructors = ["Elie", "Matt", "Tim"];

            // the JSON.stringify call converts the instructors array into a JSON string
            localStorage.setItem("instructors", JSON.stringify(instructors));

            // JSON.parse converts the JSON string back into JavaScript (in this case, a valid array)
            JSON.parse(localStorage.getItem("instructors"));
            

            
            
            
            
  // EVENTS EXERCISES           https://www.rithmschool.com/courses/intermediate-javascript/javascript-dom-events-exercises
  
            
            
            // <!DOCTYPE html>
            // <html lang="en">
            // <head>
            //     <meta charset="UTF-8">
            //     <title>DOM Exercise</title>
            //     <style>
            //         div {
            //           width: 50px;
            //           height: 50px;
            //           display: inline-block;
            //         }
            //         .brown{
            //           background-color: brown;
            //         }
            //         .green{
            //           background-color: green;
            //         }
            //         .blue{
            //           background-color: blue;
            //         }
            //         .purple{
            //           background-color: purple;
            //         }
            //         .yellow{
            //           background-color: yellow;
            //         }
            //         .car1 {
            //          background-color: #8C9C12;
            //         }
            //         .car2 {
            //          background-color: #1DA788;
            //         }
            //         .car1, .car2 {
            //             margin-left: 0;
            //         }
            //     </style>
            // </head>
            // <body>
            //     <h1 id="change_heading">Change Me!</h1>
            //     SELECTED COLOR <span class="selected">None!</span>
            //     <section>
            //         <div class="brown"></div>
            //         <div class="green"></div>
            //         <div class="blue"></div>
            //         <div class="yellow"></div>
            //     </section>
            //     <h2>Race!</h2>
            //     <button>Start the race!</button>
            //     <br>
            //     <div class="car1"></div>
            //     <br>
            //     <div class="car2"></div>
            //     <script src="script.js"></script>
            // </body>
            // </html>
            
            
            
    // 1. Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. 
    // You can do this either using window.onload or adding an event listener for DOMContentLoaded.

            document.addEventListener("DOMContentLoaded", function(){  // you have to wait for the DOM to load before accessing the container elements
                var container = document.getElementById("container");
                container.innerText = "Hello World"; // This works now!
            }

            // 1 - their answer is fucking weaksauce

            window.onload = function(){

            }
            
    // 2. Replace the text "Change me" with "Hello World!".
            var headingChange = document.getElementById("change_heading"); // correct
            headingChange.innerText = "Hello World!";
    
            
            
            window.onload = function(){
                var el = document.getElementById("change_heading");
                el.innerText = "Hello world!";
            }
            
    // 3. When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.
            var coloredBoxes = document.getElementsById("div");
            
            // my situation is I'm trying to change SELECTED COLOR, and I also need to know what the changecolor CSS command was in JS
           
            // for(var i=0; i<coloredBoxes.length; i++){
            //     coloredBoxes[i].addEventListener("hover", function(event){
            //     coloredBoxes[i].style.backgroundColor = "green";
            //     });
            // }
            
            window.onload = function(){
                var el = document.getElementById("change_heading");
                el.innerText = "Hello world!";
            
                var section = document.querySelector("section");
                section.addEventListener("mouseover", function(event){
                    var selectedColor = document.querySelector('.selected');
                    selectedColor.innerText = event.target.className;
                })
            }
            
    // 4. Create a new div element.
        var newDiv = document.createElement("div");
  
        
            var newDiv = document.createElement("div");
            newDiv.className = "purple";
            section.appendChild(newDiv);
    
        

    // 5. Give your new div a class of purple and style it so that it has a background color of purple.
        newDiv.style.backgroundColor = "purple";

    // 6. Append your new div to the page to the section tag.
        newDiv.appendChild("section").
        div.appendChild(#main); 
        
        section.appendChild("newDiv");

        
// Part 2 - car example
        // changing the race button. do you make it a new button? Nope it's already been defined
        // just selecting
        
        var raceButton = document.getElementById("button");

        // querying and creating the cars
        var car1 = document.querySelector("car1");
        var car2 = document.querySelector("car2");
        document.addEventListener(function(){ 
            
        // starting the race
        
        raceButton.addEventListener("click", function(event){
            
        // condition of not having gotten to the other side of the screen
            
        var winning = // some position of the car
        
        // setting the transition
            
            var timerID = setInterval(function(){
                
                // setting the speed
                
                
            })
        })
        
  // super interesting example, my thought process was close.. but obviously this implements resets, and disables the button during the game
  // and knows the .innerWidth property
        
        var button = document.querySelector("button"); // I need help knowing getElementById from querySelector
        var car1 = document.querySelector('.car1'); // why is there a .car1 and .car2?
        var car2 = document.querySelector('.car2');
        car1.style.marginLeft = 0; // I thought the html was loaded up like this
        car2.style.marginLeft = 0;
    
        function reset(car1, car2){ // reset function, interesting
            clearTimeout(car1.timer); // two timers for the cars
            clearTimeout(car2.timer);
            car1.style.marginLeft = 0;
            car2.style.marginLeft = 0;
            button.disabled = false; // what the fuck
        }
    
        button.addEventListener("click", function(event){
            button.disabled = true; // what... maybe the inverse
            car1.timer = setInterval(function(){
                car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*60 + 'px'; // WTF
                if(parseInt(car1.style.marginLeft) > window.innerWidth){ // window.innerWidth is the maximum margin in pxels
                    alert("Car 1 wins!");
                    reset(car1,car2);
                }
            },60)
    
            car2.timer = setInterval(function(){
                car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*60 + 'px';
                if(parseInt(car2.style.marginLeft) > window.innerWidth){
                    alert("Car 2 wins!");
                    reset(car1,car2);
                }
            },60)
        })
        
        
// 3. ToDo

        // form submission ( I know none of those methods)
        // <input type ="submit"> // html
        
        // 1
        let form = document.createElement('form'); // create the form
        
        // 2
        var newForm = document.querySelector("form"); // also can create the form
        
        
        // 2 as an array
        var toDoList = [];
        
        form.addEventListener("submit", function(event){
            // 1 as a string
            var toDoList = form.submit.toString(); // should i create strings or an array?
            
            // 2 as an array
            var toDo = form.submit.push();
            var toDoList += toDo;
            document.createElement('ol', toDo);
    
        
        // are there checkboxes for each of the todos?
        
        event.preventDefault()
        
        // I have no idea how to cross out text
        
        // remove, sounds like you would do the opposite of creating an element
        
        
        
        form.action = 'https://google.com/search';
        form.method = 'GET';

        form.innerHTML = '<input name="q" value="test">';

        // the form must be in the document to submit it
        document.body.append(form);

        form.submit();
        
        
        
        // <form onsubmit="alert('submit!');return false">
        // First: Enter in the input field <input type="text" value="text"><br>
        // Second: Click "submit": <input type="submit" value="Submit">
        // </form>
        
        
// 4. localStorage
        // local storage store

        // var complete = eventListner for checkmarked/clicked tasks
            
        var complete = form.addEventistner("submit", function(event){
            
        })
        
        localStorage.setItem("complete", complete);
        JSON.stringify(complete);
        
        
        
        
        
        
        setItem() // set something into localStorage
        getItem() // retrieve something stored
        
        localStorage.setItem("instructor", "Elie");
        
        localStorage.removeItem() // deletes a key
        localStorage.clear() // clear everything from local storage
        
        
        // adding objects to storage

            var instructors = ["Elie", "Matt", "Tim"];
            
            localStorage.setItem("instructors", instructors);
            localStorage.getItem("instructors");
            
            
            JSON.stringify() // used to convert JS to JSON
            JSON.parse() // parses a string as JSON
            
        // preserve intended data structure when it is soemthing other than a string
        
            var instructors = ["Elie", "Matt", "Tim"];

            // the JSON.stringify call converts the instructors array into a JSON string
            localStorage.setItem("instructors", JSON.stringify(instructors));

            // JSON.parse converts the JSON string back into JavaScript (in this case, a valid array)
            JSON.parse(localStorage.getItem("instructors"));
            
            
// Correct to To List https://github.com/rithmschool/intermediate_javascript_solutions/blob/master/todo_exercise/script.js

        // PART 3

            window.onload = function(){
                var todoForm = document.getElementById("newTodoForm");
                var todoList = document.getElementById("todoList");

                todoForm.addEventListener("submit", function(event){
                    event.preventDefault();

                    var removeButton = document.createElement("button");
                    removeButton.innerText = "X";

                    var newTodo = document.createElement("li");
                    newTodo.innerText = document.getElementById("task").value;

                    todoList.appendChild(newTodo);
                    newTodo.appendChild(removeButton);

                    todoForm.reset();
                })

                todoList.addEventListener("click", function(event){
                    if (event.target.tagName.toLowerCase() === 'li') {
                        event.target.style.textDecoration = "line-through";
                    }
                    else if (event.target.tagName.toLowerCase() === 'button') {
                        event.target.parentNode.remove();
                    }
                })

            }

// PART 4 With LocalStorage 

            window.onload = function(){ // using window.onload to start the creation process for variables. Is good practice
                var todoForm = document.getElementById("newTodoForm");  // ok
                var todoList = document.getElementById("todoList"); // so this is interesting. There is actually a ul with id = "toDoList"

                // retrieve from localStorage
                var savedTodos = JSON.parse(localStorage.getItem("todos")) // REMEMBER THIS LINE // wtf is this --> || []
                    // he's getting items here instead of setting them, interesting
                    
                for(var i=0; i < savedTodos.length; i++){ // having a function that will occur with each new submission, smart
                        // basing the list on saved items
                    var newTodo = document.createElement("li");
                    newTodo.innerText = savedTodos[i].task // basically each new toDo takes on the text of whatever name/id task in the HTML gets
                    newTodo.isCompleted = savedTodos[i].isCompleted ? true : false; // confused here --> wtf is isCompleted ?
                    if(newTodo.isCompleted) {
                        newTodo.style.textDecoration = "line-through"; // the styling for strikethrough
                    }
                    todoList.appendChild(newTodo);
                }

                todoForm.addEventListener("submit", function(event){
                    event.preventDefault();
                    var newTodo = document.createElement("li");
                    var taskValue = document.getElementById("task").value; // a value property of the task submission
                    newTodo.innerText = taskValue; // setting the form value to the text that gets printed
                    newTodo.isCompleted = false; // what?
                    todoForm.reset();
                    todoList.appendChild(newTodo);

                    // save to localStorage
                    savedTodos.push({task: newTodo.innerText, isCompleted: false});
                    localStorage.setItem("todos", JSON.stringify(savedTodos));
                })

                todoList.addEventListener("click", function(event){
                    var clickedListItem = event.target;

                    if(!clickedListItem.isCompleted) {
                        clickedListItem.style.textDecoration = "line-through";
                        clickedListItem.isCompleted = true;
                    } else {
                        clickedListItem.style.textDecoration = "none";
                        clickedListItem.isCompleted = false;
                    }

                    // breaks for duplicates - another option is to have dynamic IDs
                    // There are some HTML properties form the form as far as .isCompleted that I don't know
                    
                    
                    for(var i=0; i < savedTodos.length; i++){
                        if(savedTodos[i].task === clickedListItem.innerText){ // basically making sure that the cliked items get saved
                            savedTodos[i].isCompleted = clickedListItem.isCompleted;
                            localStorage.setItem("todos", JSON.stringify(savedTodos)); // remember this syntax
                        }
                    }
                });
            }
            

// Iterators https://www.rithmschool.com/courses/intermediate-javascript/javascript-iterators-foreach-map-filter

    // built in array methods used in the place of for loops
    // make the code shorter and easier to read
    
    // forEach
        // first parameter is a callback.
        // callback has three parameters: 1. value,  2. index, 3. array itself
        // always returns undefined
        // if trying to return something from the iterator, forEach is not the right choice
        // but say for each array item you were trying to add a new attribute, it makes sense
            // see that example below Reduce
        
        var arr = [4,3,2,1];
        arr.forEach(function(val,index,arr){
            console.log(val);
        }); // oh shit that used to be
        
            for(i = 0; i<arr.length; i++){
                console.log(arr[i]);
            }
            
            // this also works
            var arr = [4,3,2,1];
            // the callback here just takes a single parameter, but works exactly the same as before!
            arr.forEach(function(val){
                console.log(val);
            });
            
        // 4
        // 3
        // 2 
        // 1

                // now you get to save value and index and refer to them right off the get go with new properties
        
        arr.forEach(function(val,index,arr){
            console.log(index);
        });

        // 0
        // 1
        // 2 
        // 3

        var doubledValues = arr.forEach(function(val,index,arr){
            return val*2; // oh rip that doesn't work?
        });

        doubledValues; // undefined
        

    // double
    
         // make a new array and man
        function double(arr){
            var doubledArr = [];
            arr.forEach(functon(val){
                doubledArr.push(val*2);
            })
            return doubledArr;
        }
        
        // another example
        const items = ['item1', 'item2', 'item3'];
        const copy = [];

        // before
        for (let i=0; i<items.length; i++) {
        copy.push(items[i]);
        }

        // after
        items.forEach(function(item){
        copy.push(item);
        });
        
        
        
   // Exercise
    
        // printFirstAndLast
        printFirstAndLast(['awesome','example','of','forEach']) 
                // ae
                // ee
                // of
                // fh
                
        function printFirstAndLast(arr){
            var stringsList = [];
            arr.forEach(function(val){
                stringsList.push(val.toUpperCase())
            })
            return stringsList;
        }
        
        
        
        
        // addKeyAndValue
        // accepts an array of objects, a key, and a value
        addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true) 

                /*
                [
                    {
                        name: 'Elie',
                        isInstructor: true
                    },
                    {
                        name: 'Tim',
                        isInstructor: true
                    },
                    {
                        name: 'Elie',
                        isInstructor: true
                    }
                ]
                */

               var objList = [];
        function addKeyAndValue(val,key,objList){ // pretty unsure about this one
            
            objList.forEach(function(newName){
                name = newName;
                index.isInstructor = true;
                
            })
        }
                
            arr.Object.assign(objList, {name: newName}
            document.body.innerHTML = JSON.stringify(obj);

    // map
    // returns a new array of values.
    // value, index, array (in that order)
    
            var arr = [1,2,3,4];
            arr.map(function(val, index, array){
                return val * 2;
            }); // [2,4,6,8]
            
            // only need the val parameter
            
            var arr = [1,2,3,4];
            arr.map(function(val){
                return val * 2;
            });
            
            
            var tripledValues = arr.map(function(val,index,arr){
                return val*3;
            });
            
            tripledValues; // [3,6,9,12]
            
            // Here is how we can refactor our double method to use map
            function doubleArray(arr){
                // return the result of arr.map
                return arr.map(function(val){
                    // return a new array with each value doubled
                    return val *2;
                });
            }
            
            doubleArray([2,4]); // [4,8]
            
            // okway so why would i use forEach if I could use map????
            
    // Excercises
    
        // valTimesIndex
        
            var arr = [1,2,3,4];
            arr.map(function(val, index,array){
                return val * index;
            });
            // [0,2,6,12]
        
        // extraKey - objects, name of key and retrns an array with just the values for that key
        
            var arr = [1,2,4,5];
            
            var keyArray = 
                [{key: 1, value: 10},
                {key: 2, value: 20},
                {key: 3, value: 30}];
            
            var newArray = function extractKey(keyArray){
                newArray = [];
                keyArray.map(function(key,value){
                    newArray = keyArray(key,value);
                    return newArray;
                })
            } // well rip I tried
            // i get undefined. why?
                            
            function extractKey(array,key){ // GOD FUCK. This is the 2nd time that they have said, two parameters, and one of them is a key
            }
   
            
// Function Expression / Anonymous Functions review
// https://www.youtube.com/watch?v=OX8pd_S-M2Y
    // do not have a name
       var f = function(x,y){return x + y};
       console.log(f(5,5));
       
    // self-invoking funcitons
    // create functions as soon as they are being defined
        // scoping or minimizing code
        (function(){
            console.log("Hi!");
        })();
        // use after everything is debugged
        
    // first wrap everything inside of parentheses
    
    (function(win){
        win._E = function(arg) { //trying to replace document.getElementById with ._E
           if(arg.startsWith(".")){ // HOLY SHIT a period is called a "full stop"!
                return document.getElementsByClassName(arg.substring(1));
        } else {
            return document.getElementById(arg);
        }
    }
    })(window); 

    // var run = function(){
    //     _E("out").innerHTML = "Hello " + _E("name").value;
    //     for(var ele of)
    // }

// create an inline fuunction set to a variable

    var f = function(){
        console.log("Hello");
    };
    f();
    f=1;
    f; // undefined
            
            
    //filter - returns an array, but inside the callback you must return an expression evaluating to true or false
    // if the expression evaluates to true, the value will be added to the returned array.
    // callback to filter acts as a testing function, as in if the element in the array passes the test, filter keeps the element
    
    
        var arr = [1,23,4,5];
        var valuesGreaterThanTwo = arr.filter(function(val){
            return val > 2;
        });
        
        // valuesGreaterThanTwo returns [23,4,5]
    
    // Exercise - return random letters with Filter    
    
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    arr = [];
    function chooseLetters(){
        for(var i = 0; i<possible.length; i++){
            var newLetter = "";
            newLetter += possible.charAt(Math.random(Math.floor() * possible.length));
            arr.push(newLetter);
        }    
    };
    function filterLetters(arr) {
        arr.filter(function(val, arr){
            return val.countCharacers();
        })
    };
    chooseLetters();
    filterLetters();
    
    // close, I guess I still need practice with adding variables, numbers, strings to arrays in variaus situations
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    
                // function makeid() {
                //     var text = "";
                //     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                
                //     for (var i = 0; i < 5; i++)
                //       text += possible.charAt(Math.floor(Math.random() * possible.length));
                
                //     return text;
                //   }
                
                //   console.log(makeid());
        
   
                
                
                
// Reduce https://www.rithmschool.com/courses/intermediate-javascript/javascript-iterators-reduce

    // steep learning curves are my favorite
    // reduce works on strings, oboleans, objects, and 2d arrays
    // reduce uses callbacks that are different from forEach, map, and filter
    
    // first parameter - "start, previous, accumulator"
        // each step in the iteration this value is whatever was returned by the callback previously
        // on the first step, you can pass an initial value of the 2nd parameter
        // if you don't supply an argument, reduce assumes the value of this parameter should be 
        // the frist value in the array
        
        // create a snippet, set out some break points and watch the arguments in the callback change
        // with each iteration

        
        var arr = [2,e4,6,8];
        arr.reduce(function(acc,next){
            return acc + next;
        },5);
        
        // 1. acc - 5, next - 2; callback returns 5 + 2 = 7
        // each iteration starts with that returned value, sum of all elements
        
        
        
        // manipulate the initial value of the accumulator
        var arr = [1,2,3,4];
        arr.reduce(function(acc,next){
            if(next >= 2){
                acc['key' + next ] = next;
            }
            return acc;
        },{});
        
        // rewritten
        var arr = [1,2,3,4];
        arr.reduce(function(acc,next){
            acc['key' + next ] = next;
            return acc;
        },{});
        
        
            // wtf... so the if statement basically only creates an object with 3 keys
            // object {key2: 2, key3: 3, key4: 4}
            
            // I understand the accumuator, i don't understand next
        
            
// const
// arrow functions
// let
        
        // alternate example
        const numbers = [1, -1, 2,3];
        numbers.reduce((accumulator,currentValue) => {
            return accumulator + currentValue;
        }, 0);
        console.log(sum);
        
        
    // Exercises:
    
        // extractKey -
        
        var arr = [{name: "Toby", isKid: false}, {name: "Tim", isKid: false}, {name: "Ted", isKid: false}];
        var extractKey = function(){
            arr.reduce(function(acc,next) => {
            acc[next] = name;
            return name;
        },{});
    };
        extractKey(arr,"name");
        
        
        var arr = [{name: "Toby", isKid: false}, {name: "Tim", isKid: false}, {name: "Ted", isKid: false}];
        var extractKey = function(){
            arr.reduce(function(acc,next){
            acc[next] = name;
            return name;
        },{});
    };
        extractKey(arr,"name");
    
// concat THIS WORKS

        function extractKeys(arr, key) {
            return arr.reduce((acc, obj) => {
            return acc.concat(obj[key])
            }, [])
        }
        
        console.log(extractKeys(arr, 'name'))
        
        
    // filterLetters
   
// When to use " " versus ' ' ????
    
    var arr = ["a","b","c","d","e","f","a","b","c","d"];
    function filterLetters(array,letter){
        (function(){
            total = 0;
            array.reduce(function(acc,next){
                if(letter === acc){
                    total ++;
                }
            })
            return total;
        });
    };
    
    function filterLetters(arr,"a");
    
    
    // functioning answer
    
    function filterLetters(arr, letter){
        var count = 0;
        var uniformArray = arr.map(function(val){ // making array lower case
            return val.toLowerCase()});
        var uniformLetter = letter.toLowerCase(); // making input lower case
            if(val === uniformLetter){
                count ++;
            }
        })
        return count;
    }
    
    // addKeyAndValue
    
    // OHHHH I get what it was trying to do.
        // basically you have an object with one attribute
        // you're just trying to add another attribute
       
        
        arr=[{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
        newArr=[];
        key='name';
        value='instructor';
        function addKeyAndValue(arr,key,value){
            arr.forEach(function(v,i,arr){ // value, index, array
                v[key]=value;
            })
        }
        
//         {name: "Elie", isInstructor: true}
// VM247:8 {name: "Tim", isInstructor: true}
// VM247:8 {name: "Matt", isInstructor: true}
// VM247:8 {name: "Colt", isInstructor: true}
        
        
        
        function addKeyAndValue(arr,key,val){
            arr.reduce(function(acc,next){
                acc['key' + next] = next;
                
            }
            
        }
        
    // reduceRight is the backwards of Reduce
    
    

    
    
    
    
    
// Additional Array Methods

    // some
    
        // figure out if ANY value satisfies a condition in an array
        // returns true if any value passes a condition specified in the callback
        
        //example1
        
        arr.some(function(val){       
        
        });
        
            var arr = [1,2,3,4];

            var anythingGreaterThanTwo = arr.some(function(val){
                return val > 2;
            });
            
            var anyStrings = arr.some(function(val){
                return typeof val === "string";
            });
            
            anythingGreaterThanTwo; // true
            anyStrings; // false
        
    // every
    
        // figure out if all values satisfy a condition
        
        arr.every(function(val){
            
        });
        
    // find
    
        // pick out a variable
        // iterator returns the first value in the array that satisfies the condition
        
        var arr = [-3,1,8,4];
        var firstValue = arr.find(function(val){
            return val > 2;
        });
        
    // findIndex
    
        // returns index of the value that satisfies the conditon
        
// combining iterators

    // take an array of numbers
    // filter the even ones
    // double the remaining values
    // add everything up
    
    // chain this shit up
    
        var arr = [1,2,3,4,5];
        
        var newArr = [];
        function newNumber(number){
            for(i = 0; i<5; i++){
                var number = Math.random * (Math.random * 10);
                newArr.push(number);
            }
            return newArr;
        };
        newNumber();
        
        
        arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val * 2;
        }).reduce(function(acc,next){
            return acc + next; // sums remainders
        },0)

        
        // alternatively
        
        var arr = [1,2,3,4,5];
        
        function isNumberOdd(val) {
            return val % 2 === 1;
        }
        
        function doubleValue(val) {
            return val * 2;
        }
        
        function sum(a,b) {
            return a + b;
        }
        
        arr.filter(isNumberOdd)
            .map(doubleValue)
            .reduce(sum,0); // 18
            
    // advantage of a for loop is that you can break or continue to the next iteration
    

// Before using an iterator, it's always good to ask whether forEach is the best candidate 
// for the job, or whether another iterator would be more appropriate. 
// .map - If you're trying to manipulate values in an array to return a new array of the same length, 
// .filter - if you're trying to remove some elements in the array and keep others,
//  .reduce if you're looking to take an array and output some other value (a number, 
// a string, an object, etc.)
            
            
  

// Iterators Exercises https://www.rithmschool.com/courses/intermediate-javascript/javascript-iterators-exercises
// Solutions: https://repl.it/@juliahazer/SlategrayVastReindeer

var users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];

  
  // printEmails
  
  function printEmails(obj){
      users.forEach(function(val){
        val = users.email;
      return val;
  });
}; 
    
    // printHobbies
    
function printHobbies(obj){
    users.forEach(function(val){
        val = users.hobbies;
        return (val);
    })
};

        //Write a function called printHobbies which console.log's each hobby for each user.

        function printHobbies(){
            users.forEach(function(val){
            val.hobbies.forEach(function(hobby){
                console.log(hobby)
            })
            })
        }
        

//Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in

function findHometownByState(state){
    return users.find(function(val){
      return val.hometown.state === state;
    })
  }
  
  //Write a function called allLanguages which returns an array of all of the unique values

function allLanguages(){
    return users.reduce(function(acc, next){
      next.favoriteLanguages.forEach(function(lang){
        if(!acc.includes(lang)){
          acc.push(lang);
        }
      })
      return acc;
    },[]).sort(); // THIS is a very interesting line here
  }
  
