console.log("Country APIs")

const mainPage = document.querySelector(".main-page")
const changeBgBtn = document.querySelector(".switch-modes");
const moonIcon = document.querySelector(".moon-icon")
const elements = document.querySelectorAll(".light-mode-element")
// const countryDetails = document.querySelector(".country-details")

changeBgBtn.addEventListener("click", ()=>{
    elements.forEach((element) => {
        if(element.classList.contains('light-mode-element')){
            element.classList.remove('light-mode-element')
            element.classList.add('dark-mode-element')
            moonIcon.innerHTML = `<i class="fa-solid fa-moon"></i>`
            mainPage.classList.add('dark-mode-page')
            // countryDetails.classList.add("dark-mode-element")
        }
        else{
            element.classList.add('light-mode-element')
            element.classList.remove('dark-mode-element')
            moonIcon.innerHTML = `<i class="fa-regular fa-moon"></i>`
            mainPage.classList.remove('dark-mode-page')
            // countryDetails.classList.remove("dark-mode-element")
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
                <span class="region"> Region: </span>  
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
2. search for country via APIs
3. search by Region via APIs
*/