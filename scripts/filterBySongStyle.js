const musicalStylesList = document.getElementById("style-filter");

function displayMusicalStyles(musicalStyles){

    musicalStyles.forEach((style, index)=>{

        let newMusicalStyle = document.createElement("li");

        newMusicalStyle.innerHTML =
        `
        <li class="musical-style flex align-center justify-center" id=${index}>${style}</li>
        `
        musicalStylesList.append(newMusicalStyle);

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

    element.addEventListener("click",filterByStyle)
})


function filterByStyle(){

    selected = document.getElementsByClassName("selected")[0];
    if (selected.id == 0){
        displaySongs(products);
        return products;
    }
    const filteredSongs = products.filter((element)=>{
        return element.category == selected.id
    })
    displaySongs(filteredSongs);
    return filteredSongs;
}

