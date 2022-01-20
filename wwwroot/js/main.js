const indexh1 = document.getElementById("index_h1");

const randomTitle = () => {
    let random = Math.round(Math.random() * 3);

    let title;
    if (random === 1) title = "Welcome to my first ASP.NET website";
    else if (random === 2) title = "Pretty cool first ASP.NET website huh?";
    else title = "This Title is dynamically generated! COOL!";



    indexh1.textContent = title;
}

window.addEventListener("DOMContentLoaded", randomTitle)