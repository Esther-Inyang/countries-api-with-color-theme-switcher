console.log("Country APIs")

const mainPage = document.querySelector(".main-page")
const changeBgBtn = document.querySelector(".switch-modes");
const moonIcon = document.querySelector(".moon-icon")
const elements = document.querySelectorAll('.light-mode-element')
const countryDetails = document.querySelector(".country-details")
    // for APIs
const baseUrl = 'https://restcountries.com/v3.1/all'
const allCountriesContainer = document.querySelector('.all-countries-container') //country-container

changeBgBtn.addEventListener("click", ()=>{
    elements.forEach((element) => {
        if(element.classList.contains('light-mode-element')){
            element.classList.remove('light-mode-element')
            element.classList.add('dark-mode-element')
            moonIcon.innerHTML = `<i class="fa-solid fa-moon"></i>`
            mainPage.classList.add('dark-mode-page')
            countryDetails.classList.add("dark-mode-element")
        }
        else{
            element.classList.add('light-mode-element')
            element.classList.remove('dark-mode-element')
            moonIcon.innerHTML = `<i class="fa-regular fa-moon"></i>`
            mainPage.classList.remove('dark-mode-page')
            countryDetails.classList.remove("dark-mode-element")
        }
    })
})

async function getApi(fromUrl) {
    const apiData = await fetch(fromUrl)
    const response  = await apiData.json()
    setCountriesOnLoad(response) 
}
getApi(baseUrl)

function setCountriesOnLoad(data){
    console.log(data)
    
    allCountriesContainer.innerHTML = '';
    data.forEach((country, index) => {
        //  console.log(datum.name.common)
        const { flags, name, population, region, capital, altSpellings, continents } = country;  //what? destructuring?
        const newCountryContainer = document.createElement("div"); //new div forCountry
        newCountryContainer.classList.add('country-container')  //add styles forCountry

        // ????????????????????? changing background and country details????????
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

        ////////////////////////Change Background Modes/////////////////////////
        
        const changeBgBtn = document.querySelector(".switch-modes");
        // countryDetails.classList.add('light-mode-element')

        changeBgBtn.addEventListener("click", ()=>{
            
            if(newCountryContainer.classList.contains('light-mode-element')){
                newCountryContainer.classList.remove('light-mode-element')
                newCountryContainer.classList.add('dark-mode-element')
                // countryDetails.classList.add('dark-mode-element')
            }
            else{
                newCountryContainer.classList.add('light-mode-element')
                newCountryContainer.classList.remove('dark-mode-element')
                // countryDetails.classList.remove('dark-mode-element')
            }
        })

        ////////////////////////////////////////////////////////////////////////

        allCountriesContainer.appendChild(newCountryContainer)
    })
}

//<h2 class="country-alt">Alt Spelling: ${name.common}</h2>
//<h2 class="country-alt">Alt Spelling: ${altSpellings[0]}</h2>


/*         WHAT TO FIX
1. How to change the border of optgroup
2. How to add border-radius to optgroup
3. how to add text-shadow to option
4. reduce the width of the optgroup
5. search for country via APIs
6. search by Region via APIs
7. element background not changing on dark mode
*/