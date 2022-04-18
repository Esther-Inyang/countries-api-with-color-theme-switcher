console.log("Country APIs")

const mainPage = document.querySelector(".main-page")
const changeBgBtn = document.querySelector(".switch-modes");
const moonIcon = document.querySelector(".moon-icon")
const elements = document.querySelectorAll('.light-mode-element')


changeBgBtn.addEventListener("click", ()=>{
    elements.forEach((element) => {
        if(element.classList.contains('light-mode-element')){
            element.classList.remove('light-mode-element')
            element.classList.add('dark-mode-element')
            moonIcon.innerHTML = `<i class="fa-solid fa-moon"></i>`
            mainPage.classList.add('dark-mode-page')
        }
        else{
            element.classList.add('light-mode-element')
            element.classList.remove('dark-mode-element')
            moonIcon.innerHTML = `<i class="fa-regular fa-moon"></i>`
            mainPage.classList.remove('dark-mode-page')
        }
    })
})


async function getApi(element) {
    const apiData = await fetch('')
    const response  = await apiData.json()
    console.log(response) 
}