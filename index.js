// query selectors
const inputs = document.querySelectorAll(".angleInput");
const triangleBtn = document.querySelector("#triangleBtn");
const outputDiv = document.querySelector("#output");

// calculating sum of angles
function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))
    if(sumOfAngles===180){
        outputDiv.innerText = "Yay! The angles form a triangle"
    } else {
        outputDiv.innerText = "Woops! These angles dont form a triangle."
    }
}

triangleBtn.addEventListener('click', isTriangle)