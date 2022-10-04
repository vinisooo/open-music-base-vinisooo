const changeThemeBtn = document.getElementById("change-theme-btn");

changeThemeBtn.addEventListener("click",(event)=>{

    const html = document.querySelector("html");
    html.classList.toggle("dark-mode");

    event.target.classList.toggle("light-icon");
    event.target.classList.toggle("dark-icon");
})