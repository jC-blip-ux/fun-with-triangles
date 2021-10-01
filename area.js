const userInput = document.querySelectorAll(".inputsForArea")

const areaBtn = document.querySelector("#area-btn")

const areaOutputBtn = document.querySelector("#output")

function calculateLengthOfTriangle(a,b){
    const lengthOfTraingle = a * b;
    return lengthOfTraingle;
}

function calculateAreaOfTriangle(){
    const lengthOfTraingle = calculateLengthOfTriangle(Number(userInput[0].value),Number(userInput[1].value));
    const areaOfTriangle = (lengthOfTraingle)/2; 
    areaOutputBtn.innerText = "The area of the triangle is " + areaOfTriangle + "cm"
    
}

areaBtn.addEventListener("click", calculateAreaOfTriangle)