function displayTrivia(trivia){
    
    trivia.forEach((element, index) => {
        let addition = document.createElement('h4');
        addition.innerText = element.question;

        document.querySelector('.container').appendChild(addition);
});
}

async function getTrivia() {
    try {
        const response = await fetch('https://opentdb.com/api.php?amount=10&type=boolean');
        const responseJson = await response.json();

        displayTrivia(responseJson.results);        
    } catch(err) {
        console.error(`Error:`);
    }

}