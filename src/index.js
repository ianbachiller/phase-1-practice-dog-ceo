console.log('%c HI', 'color: firebrick')

//Global variables
const picSectionForChallenge1 = document.querySelector("#dog-image-container")
const ul = document.querySelector("#dog-breeds")

//Challenge 1
fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(objectified => addEachImageToTheDom(objectified.message))

function addEachImageToTheDom(objectified){
    // console.log(objectified)
    for (let imgUrl of objectified){
        const image = document.createElement('img')
        image.src = imgUrl
        picSectionForChallenge1.appendChild(image)
    }
}

//Challenge 2

fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(breeds => {
        addEachBreedToUl(breeds.message)
        setupEventListeners()
    })
function addEachBreedToUl(breeds){
    for(let breed in breeds){
            for(let subBreed of breeds[breed]){
                const newLi = document.createElement('li')
                newLi.textContent = subBreed
                newLi.setAttribute("class", "sub-breed")
                newLi.setAttribute("style", "")
                ul.appendChild(newLi)
            }
        }
    }

//Challenge 3

function setupEventListeners(){
    let specificBreed = document.querySelectorAll(".sub-breed")
    for(let element of specificBreed){
        element.addEventListener('click', changeColor)
    }
    //Challenge 4

    let newBreedArrayForFilter = Array.from(specificBreed).map(elementBreed => elementBreed.textContent)
    console.log(newBreedArrayForFilter)

    const dropDownMenu = document.querySelector('#breed-dropdown');
    const ddListener = dropDownMenu.addEventListener('change', filterFunction)

    function filterFunction(event) {
        const filterByThisLetter = event.target.value 
        const filteredBreeds = newBreedArrayForFilter.filter(word => word[0] === filterByThisLetter)
        console.table(filteredBreeds.sort())
    }
}
//Challenge 3 continuation
let randomNumber = () => Math.floor(Math.random() * 255)

function randomColor(){
    let randColor = `color: rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
    console.log(randColor)
    return randColor
}
function changeColor(event){
    console.log(event.target.textContent)
    event.target.style = randomColor()
}


