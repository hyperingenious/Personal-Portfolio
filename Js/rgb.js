
let colorValue = 0;
setInterval(() => {

    //Array Of Html Classes
    const rgbClasses = [
        document.querySelectorAll('.px-11'),
        document.querySelectorAll('.spanTag'),
        document.querySelectorAll('h1'),
        document.querySelectorAll('.bigSpan'),
        document.querySelectorAll('path'),
        document.querySelectorAll('polyline'),
        document.querySelectorAll('.skill_box')
    ]

    //Variables for HTML classes
    const [allLi, allSpan, allH1, allBigSpan, allPath, allPolyline, allSkillBox] = rgbClasses;


    if (colorValue <= 360) {
        colorValue++
        // document.querySelector('#logo').style.color = `hsl(${colorValue}, 100%, 57%)`;


        allLi.forEach((e) => {
            e.style.color = `hsl(${colorValue},100%,30%)`;
        })
        allSpan.forEach((e) => {
            e.style.backgroundColor = `hsl(${colorValue},100%,30%)`;
        })
        allH1.forEach((e) => {
            e.style.color = `hsl(${colorValue},100%,30%)`;
        })
        allBigSpan.forEach((e) => {
            e.style.backgroundColor = `white`;
        })
        allPath.forEach((e) => {
            e.style.stroke = `hsl(${colorValue},100%,30%)`;
        })
        allPolyline.forEach((e) => {
            e.style.stroke = `hsl(${colorValue},100%,30%)`;
        })
        allSkillBox.forEach((e) => {
            e.style.borderColor = `hsl(${colorValue},100%,30%)`;
        })

    }
    if (colorValue >= 360) {
        colorValue = 0
    }
}, 10);



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