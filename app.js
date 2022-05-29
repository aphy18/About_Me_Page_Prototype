let locationOne = document.getElementById('location-one')
let locationTwo = document.getElementById('location-two')
let locationThree = document.getElementById('location-three')
let locationFour = document.getElementById('location-four')
let locationLine = document.querySelector('.location-line')

const webpageHeight = document.documentElement.scrollHeight

let locationArr = document.querySelectorAll('.location')



let locationCounter = []

const changeLineHeight = () => {
    if (window.scrollY < webpageHeight * 0.45) {
        locationLine.style.height = ((locationCounter.length / locationArr.length) * 100) + '%'
    }
}

function decreaseLineHeight() {
    locationLine.style.height = ((locationCounter.length / locationArr.length) * 100) + '%'
}



window.addEventListener('scroll',() => {

    if (window.scrollY > 350) {
        console.log('PASSED 299')
        locationOne.style.backgroundColor = 'rgb(235, 174, 174)'
        locationCounter[0] = 1;
        changeLineHeight()
         
    } else {
        locationOne.style.backgroundColor = 'rgb(238, 218, 218)'
        locationCounter = []
        decreaseLineHeight()
         
    }

    if (window.scrollY > 650) {
        locationCounter[1] = 2
        locationTwo.style.backgroundColor = 'rgb(235, 174, 174)'
        changeLineHeight()
    
         
    } else {
        locationTwo.style.backgroundColor = 'rgb(238, 218, 218)'
        locationCounter.splice(1,1)
        decreaseLineHeight()
    }

    if (window.scrollY > 850) {
        locationCounter[2] = 3;
        locationThree.style.backgroundColor = 'rgb(235, 174, 174)'
        changeLineHeight()
       
    } else {
        locationThree.style.backgroundColor = 'rgb(238, 218, 218)'
         locationCounter.splice(2,1)
         decreaseLineHeight()
    }
    if (window.scrollY > 1000) {
        locationCounter[3] = 4;
        locationFour.style.backgroundColor = 'rgb(235, 174, 174)'
        // changeLineHeight()
         
      
    } else {
        locationFour.style.backgroundColor = 'rgb(238, 218, 218)'
         locationCounter.splice(3,1)
    
    }


    console.log('scroll y -->',window.scrollY)
})

