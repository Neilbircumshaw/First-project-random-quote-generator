// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//========================================================================== //

// get random quote function that selects a random quote object from the quotes array
// and returns the randomly selected quote object

//========================================================================== //

// my array of quotes that will be called upon later in the program//

var quotes = [
  {
    quote: "The key to immortality...not dying.",
    source: "Master Yi",
    citation: "League Of Legends, ",
	category: "(PC and Mac), ",
	year_Of_Game: 2009.
	
    
  },
  {
    quote: "I used to be an adventurer like you, but then I took an arrow to the knee.",
    source: "Stormcloak#345",
    citation: "Elder Scrolls: Skyrim, ",
	category: "(Xbox 360,PS3,Xbox One, PS4 and PC), ",
	year_Of_Game: 2013.
    
  },
  
  {
    quote: "It's dangerous to go alone...take this!",
    source: "Old random dude",
    citation: "The Legend of Zelda, ",
	category: "(NES), ",
	year_Of_Game: 1999.
    
  },
  
  {
    quote: "I'm Commander Shepard and this is my favorite store on the Citadel",
    source: "Shepard",
    citation: "Mass Effect, ",
	category: "(Xbox 360 and PC), ",
	year_Of_Game: 2007.
    
  },
  
  {
    quote: "This is my story!",
    source: "Tidus",
    citation: "Final Fantasy X, ",
	category: "(PS2, PS3 and PS4), ",
	year_Of_Game: 2001.
    
  },
  
  
];


//========================================================================== //

/* This section selects a random quote from the array by utilising the math.random function. 
   This section also pushes a quote into the QuotesSeen array while taking it out of the quotes array. 
   Once the quotes array is empty it will then be "restocked" again using an if statement to do this by counting the length of the array with .length.
   The second line will also empty the QuotesSeen array. 
   This ensures that the quotes will not repeat 
   until all quotes are atleast shown once.Achieved this by reseaching further about the .splice function 
   which removes and adds elements from an array*/





var QuotesSeen = [];                                            

function getRandomQuote() {
  if (quotes.length == 0){                                       
  quotes = QuotesSeen.splice(0, QuotesSeen.length);}      
  var random_nub = Math.floor(Math.random() * quotes.length);     
  var splicedQuote = quotes.splice(random_nub, 1)[0];             
  QuotesSeen.push(splicedQuote);                             
  return splicedQuote;                                        
}

//========================================================================== //


//========================================================================== //


/*This function creates a random number that is then later stored into 3 varibles (red, green and blue) 
which are located in the printQuote function. This methord is times by 256 (which is the max number on the color spectrum)
in order to create 3 seperate numbers which is then concatinated under another varible called rgbColor to create somthing 
that is readble to the program, this being 'rgb(<number>,<number>,<number>)'. This is then called later by document.body.style.background 
which is located in the function printQuote in order the effect the backgroundcolor each time the button is clicked and the quote changes. 
(had to do additional reseach to find out how to effect the DOM of the page)  */

function randomRGB(){
	
	return Math.floor(Math.random() * 256);
	}
	
       	
//========================================================================== //

//========================================================================== //

/*The function printQuote will be equal to the getRandomQuote function in order to know which random quote to 
choose from the array (which object). dot notaition is then used along with concatination in order to access the content
within the object (the keys) and then print them all out to the page asigning them to a varble named html. console.log will 
put the quotes to the console to illustate how there are no repeats .*/ 




function printQuote() {
  
    var red = randomRGB();
    var green = randomRGB();
    var blue = randomRGB();
    var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  

    var randomQuote = getRandomQuote();
    var html = '<p class="quote">' + randomQuote.quote + '</p>';
    html += '<p class="source">' + randomQuote.source;
    html += '<span class="citation">' + randomQuote.citation + '</span>';
    html += '<span class="category">' + randomQuote.category + '</span>';
    html += '<span class="year_Of_Game">' + randomQuote.year_Of_Game + '</span>' + '</p>';
  
    console.log(html);
	
  document.body.style.backgroundColor = rgbColor;
  document.getElementById('quote-box').innerHTML = html;
}


	


//==========================================================================//

/*this setInterval function will call the printQuote function every 10 seconds and therefore display a new random quote 
to the page and also change the background color*/


setInterval(printQuote, 10000);





//========================================================================== //

















