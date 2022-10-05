const priceRangeInput = document.getElementById("price-filter-range");
const filteredPrice = document.getElementById("filtered-price");
filteredPrice.innerText = "R$ " + parseFloat(priceRangeInput.max).toFixed(2);


priceRangeInput.addEventListener("mousemove",filterByPrice);
priceRangeInput.addEventListener("touchmove",filterByPrice);


function filterByPrice(){
    filteredPrice.innerHTML = `R$ ${parseFloat(priceRangeInput.value).toFixed(2)}`

    const filteredSongs = filterByStyle().filter(element=> element.price <= priceRangeInput.value);
    displaySongs(filteredSongs);
}