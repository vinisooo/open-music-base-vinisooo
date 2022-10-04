const musicalStylesList = document.getElementById("style-filter");

function displayMusicalStyles(musicalStyles){
    musicalStyles.forEach((style)=>{
        musicalStylesList.innerHTML +=
        `
        <li class="musical-style flex align-center justify-center">${style}</li>
        `
    })

    const allStyles = document.getElementsByClassName("musical-style")[0];
    allStyles.classList.add("selected");

}
displayMusicalStyles(categories);

const musicalStylesLi = document.getElementsByClassName("musical-style");
const musicalStyles = [...musicalStylesLi]

musicalStyles.forEach((element) =>{
    element.addEventListener("click",(event)=>{
        musicalStyles.forEach((element)=>{
            element.classList.remove("selected")
        })
        event.target.classList.add("selected");
    })
})
