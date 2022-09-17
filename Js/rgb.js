const rgbClass = document.querySelectorAll('.rgb')
let colorValue = 0;


const clickButton = document.querySelector('.preRgb');
let colorValue2 = 0;


setInterval(() => {
    if (colorValue2 <= 360) {
        colorValue2++;
        clickButton.style.color = `hsl(${colorValue2},100%,50%)`
    }
    else if (colorValue2 >= 360) { colorValue2 = 0; }
}, 10);

const rgbFunction = function () {

    if (colorValue == 0) {
        setInterval(() => {
            //getting an rgb class
            if (colorValue <= 360) {
                colorValue++
                rgbClass.forEach((e) => {
                    e.style.backgroundColor = `hsl(${colorValue},100%,50%)`;
                })
            }
            else if (colorValue >= 360) {
                colorValue = 0
            }

        }, 10)
    }
    else if(colorValue>0) {
        rgbClass.forEach((e) => {
            e.style.backgroundColor = '#00FF85';
        })
    }
}
clickButton.addEventListener('click', rgbFunction)






/*
let colorValue = 0;
setInterval(() => {
    let textClass = document.querySelector('.header');
    if(colorValue<=360){
        colorValue++
        textClass.style.color = `hsl(${colorValue},100%,57%)`
        console.log(colorValue);
        if (colorValue>=360) {
            colorValue = 0
        }
    }
}, 10);*/