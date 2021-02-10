/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    const defaultColor = "#F08080";
    const newColor = "#b50b55";
    let currentColor = document.querySelector("#color-name").textContent;

    //Write a condition determine what color it should be changed to
    if (defaultColor === currentColor){
        //change the background color using JS
        document.querySelector("#color-block").style.backgroundColor = newColor;
        //Change the text of the color using the span id color-name
        document.querySelector("#color-name").textContent = newColor;
    }
    else {
        //change the background color using JS
        document.querySelector("#color-block").style.backgroundColor = defaultColor;
        //Change the text of the color using the span id color-name
        document.querySelector("#color-name").textContent = defaultColor;
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const convertbtn = document.querySelector("#convertbtn");
convertbtn.addEventListener("click", convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    let fahTemp = document.querySelector("#f-input").value;
    //Calculate the temperature here
    let celTemp = (fahTemp - 32) * (5/9);
    //Send the calculated temperature to HTML
    document.querySelector("#c-output").textContent = celTemp;
}


