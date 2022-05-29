let locationOne = document.getElementById('location-one')
let locationTwo = document.getElementById('location-two')
let locationThree = document.getElementById('location-three')
let locationFour = document.getElementById('location-four')
let locationLine = document.querySelector('.location-line')

const webpageHeight = document.documentElement.scrollHeight

let locationArr = document.querySelectorAll('.location')

console.log('location array length -->', locationArr)


let locationCounter = []




window.addEventListener('scroll',() => {


    console.log('scrollY -->', window.scrollY)
    if (window.scrollY >= webpageHeight * 0.15) {
        locationOne.style.backgroundColor = 'red'
        locationCounter[0] = 1;
         
    } else {
        locationOne.style.backgroundColor = 'rgb(238, 218, 218)'
        locationCounter = []
         
    }

    if (window.scrollY >= webpageHeight * 0.25) {
        locationTwo.style.backgroundColor = 'red'
        locationCounter[1] = 2
    
         
    } else {
        locationTwo.style.backgroundColor = 'rgb(238, 218, 218)'
        locationCounter.splice(1,1)
         
    }

    if (window.scrollY >= webpageHeight * 0.35) {
        locationThree.style.backgroundColor = 'red'
         locationCounter[2] = 3;
       
    } else {
        locationThree.style.backgroundColor = 'rgb(238, 218, 218)'
         locationCounter.splice(2,1)
    }
    if (window.scrollY >= webpageHeight * 0.45) {
        locationFour.style.backgroundColor = 'red'
        locationCounter[3] = 4;
         
      
    } else {
        locationFour.style.backgroundColor = 'rgb(238, 218, 218)'
         locationCounter.splice(3,1)
    
    }

    console.log('location counter -->', locationCounter)

})

