const quotes=[
    {quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
    {quote: "To live is the rarest thing in the world. Most people exist, that is all.", author:"Oscar Wilde"},
    {quote:"We accept the love we think we deserve.", author:"Stephen Chbosky"},
    {quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author:"Ralph Waldo Emerson"},
    {quote:"Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.", author:"Marilyn Monroe"},
    {quote:"I solemnly swear that I am up to no good.", author:"J.K. Rowling"}
];

let lastIndex = -1;

function getRandomQuote() {  
    let randomIndex;

    randomIndex = Math.floor(Math.random() * quotes.length); 
    while (randomIndex === lastIndex) {  
        randomIndex = Math.floor(Math.random() * quotes.length);  
    }  
    lastIndex = randomIndex;
    return quotes[randomIndex];  
} 

function displayQuote() {  
    const { quote, author } = getRandomQuote();  
    document.getElementById('quote').innerText = `"${quote}"`;  
    document.getElementById('author').innerText = `— ${author}`;  
} 

document.getElementById('quoteButton').addEventListener('click', displayQuote);  
