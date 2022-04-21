console.log("Country APIs")

//For Arrow UP////////////////////////////////////
const arrowUp = document.querySelector(".arrow-up-div");

arrowUp.addEventListener("click", ()=>{
    // console.log("I am clicked")
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth"
    })
})
//////////////////////////////////////////////////

//for Select Region Dropdown//////////////////////
const angleDown = document.querySelector(".fa-angle-down")
const angleUp = document.querySelector(".fa-angle-up")

const selectRegion = document.querySelector(".select-region")

angleDown.addEventListener("click", ()=>{
    selectRegion.classList.add("display-block");
    angleUp.classList.add("display-block")
    angleDown.classList.add("display-none");
})

angleUp.addEventListener("click", ()=>{
    selectRegion.classList.remove("display-block");
    angleUp.classList.remove("display-block")
    angleDown.classList.remove("display-none");
})

window.addEventListener("click", (e)=>{
    const selectReg = document.querySelector("#select-reg")
    const angleDw = document.querySelector("#angle-dw")
    const angleU = document.querySelector("#angleUp")

    if(e.target.id !== "select-reg" && e.target.id !== "angle-dw"){
        selectReg.style.display = "none";
        angleU.style.display = "none";
        angleDw.style.display = "block";
    }
    else {
        selectReg.style.display = "block";
        angleU.style.display = "block";
        angleDw.style.display = "none";
    }

})



//////////////////////////////////////////////////


const mainPage = document.querySelector(".main-page")
const changeBgBtn = document.querySelector(".switch-modes");
const moonIcon = document.querySelector(".moon-icon")
const elements = document.querySelectorAll(".light-mode-element")

changeBgBtn.addEventListener("click", ()=>{
    elements.forEach((element) => {
        if(element.classList.contains('light-mode-element')){
            element.classList.remove('light-mode-element')
            element.classList.add('dark-mode-element')
            moonIcon.innerHTML = `<i class="fa-solid fa-moon"></i>`
            mainPage.classList.add('dark-mode-page')
            // mainPage.style.backgroundColor = "hsl(0, 0%, 98%)";
        }
        else{
            element.classList.add('light-mode-element')
            element.classList.remove('dark-mode-element')
            moonIcon.innerHTML = `<i class="fa-regular fa-moon"></i>`
            mainPage.classList.remove('dark-mode-page')
            // mainPage.style.backgroundColor = "black";
        }
    })
})

const baseUrl = 'https://restcountries.com/v3.1/all'
const allCountriesContainer = document.querySelector('.all-countries-container') 

window.addEventListener("DOMContentLoaded", ()=>{
    async function getApi(fromUrl) {
        const apiData = await fetch(fromUrl)
        const response  = await apiData.json()
        setCountriesOnLoad(response) 
    }
    
    getApi(baseUrl)
})

function setCountriesOnLoad(data){
    console.log(data)
    
    allCountriesContainer.innerHTML = '';
    data.forEach((country, index) => {
        //  console.log(datum.name.common)
        const { flags, name, population, region, capital, altSpellings, continents } = country;  
        const newCountryContainer = document.createElement("div");

        newCountryContainer.classList.add('country-container')  
        newCountryContainer.classList.add('light-mode-element')

        newCountryContainer.innerHTML = 
        ` <div class="country-img-div">
            <img src="${flags.svg}" class="country-img">
            </div>

        <div class="country-details">
            <h1 class="country-name">${name.common}</h1>
            
            <p class="country-alt-detail">
                <span class="country-alt"> Alt Spelling: </span>
                ${altSpellings[0]}
            </p>

            <p class="continents-detail">
                <span class="continent"> Continent: </span>
                ${continents[0]}
            </p>

            <p class="population-detail">
                <span class="population"> Population: </span> 
                ${population}
            </p>

            <p class="region-detail">
                <span class="region-name"> Region: </span>  
                ${region}
            </p> 

            <p class="capital-detail">
                <span class="capital"> Capital: </span>  
                ${capital}
            </p>
        </div> `

        ///////////////Switching Light and Dark Background Modes///////////////

        const changeBgBtn = document.querySelector(".switch-modes");

        changeBgBtn.addEventListener("click", ()=>{
            if(newCountryContainer.classList.contains('light-mode-element')){
                newCountryContainer.classList.remove('light-mode-element')
                newCountryContainer.classList.add('dark-mode-element')
            }
            else{
                newCountryContainer.classList.add('light-mode-element')
                newCountryContainer.classList.remove('dark-mode-element')
            }
        })

        ////////////////////////////////////////////////////////////////////////

        allCountriesContainer.appendChild(newCountryContainer)
    })
}




/*         WHAT TO FIX
1. How to add preloader

2. Design the Search Page for MOBILE and add more details and modes.

3. Design the Search Page for DESKTOP and add more details and modes.

4. When a country is searched, display the country's page design

5. Design the SELECT REGION Option with dropdown

6. When a REGION is selected, show all countries that contains the selected Region
*/