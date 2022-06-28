const botao = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const footer = document.getElementsByTagName('footer')[0];
const mainContent = document.getElementsByTagName('body')[0];
const darkModeclass = 'dark-mode';

function changeMode(){
    changeClasses();
    changeText();
}

function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    if(mainContent.classList.contains(darkModeclass)){
        botao.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    botao.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

function changeClasses(){
    botao.classList.toggle(darkModeclass);
    h1.classList.toggle(darkModeclass);
    mainContent.classList.toggle(darkModeclass);
    footer.classList.toggle(darkModeclass);
}

botao.addEventListener('click', changeMode);

