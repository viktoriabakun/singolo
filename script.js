const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('.nav-style').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    
})

const TABS = document.getElementById('tabs');

TABS.addEventListener('click', (event) => {
    TABS.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    
})