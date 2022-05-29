let locationOne = document.getElementById('location-one')
let locationTwo = document.getElementById('location-two')
let locationThree = document.getElementById('location-three')
let locationFour = document.getElementById('location-four')
let locationLine = document.querySelector('.location-line')

const webpageHeight = document.documentElement.scrollHeight

let locationArr = document.querySelectorAll('.location')

const isActive = {
    L1: false,
    L2: false,
    L3: false,
    L4: false
}




window.addEventListener('scroll',() => {


    console.log('scrollY -->', window.scrollY)
    if (window.scrollY >= webpageHeight * 0.15) {
        locationOne.style.backgroundColor = 'red'
        isActive.L1 = true;
    } else {
        locationOne.style.backgroundColor = 'rgb(238, 218, 218)'
        isActive.L1 = false;
    }

    if (window.scrollY >= webpageHeight * 0.25) {
        locationTwo.style.backgroundColor = 'red'
        isActive.L2 = true;
    } else {
        locationTwo.style.backgroundColor = 'rgb(238, 218, 218)'
        isActive.L2 = false;
    }

    if (window.scrollY >= webpageHeight * 0.35) {
        locationThree.style.backgroundColor = 'red'
        isActive.L3 = true;
    } else {
        locationThree.style.backgroundColor = 'rgb(238, 218, 218)'
        isActive.L3 = false;
    }
    if (window.scrollY >= webpageHeight * 0.45) {
        locationFour.style.backgroundColor = 'red'
        isActive.L4 = true;
    } else {
        locationFour.style.backgroundColor = 'rgb(238, 218, 218)'
        isActive.L4 = false;
    }

    console.log('isActive obj -->', isActive)

    
})


