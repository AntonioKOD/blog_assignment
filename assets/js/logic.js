const toggleButton = document.getElementById('toggle-mode');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const container = document.querySelector('.container');
const goBack = document.querySelector('.get-back');

let mode = "light";
toggleButton.addEventListener('click', function() {
    if (mode === "light") {
        mode = "dark";
        container.setAttribute('class', 'dark')
        sunIcon.style.display = "none";
        moonIcon.style.display= "block";
    } else {
        mode = "light";
        container.setAttribute('class', 'light')
        sunIcon.style.display = "block";
        moonIcon.style.display= "none";
        
        
    };
});


