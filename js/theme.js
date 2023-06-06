let page = document.querySelector('body');
let other = document.querySelectorAll('themos');
        let themeButton = document.querySelector('.theme-button');


        themeButton.onclick = function() {
        page.classList.toggle('dark-theme');
        };