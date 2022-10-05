
function changeTheme(){
    const changeThemeBtn = document.getElementById("change-theme-btn");
    const html = document.querySelector("html");

    const darkModePref = localStorage.getItem("darkmode");

    if (darkModePref){
        html.classList.add("dark-mode");
        changeThemeBtn.classList.toggle("light-icon");
        changeThemeBtn.classList.toggle("dark-icon");
    }
    
    changeThemeBtn.addEventListener("click", ()=>{
        
        const darkModePref = localStorage.getItem("darkmode");
        if (!darkModePref){
            localStorage.setItem("darkmode",true);
        }if (darkModePref){
            localStorage.removeItem("darkmode");
        }

        html.classList.toggle("dark-mode");
        changeThemeBtn.classList.toggle("light-icon");
        changeThemeBtn.classList.toggle("dark-icon");
    }) 

}   

changeTheme();

