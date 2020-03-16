const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('.nav-style').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    
})

const tabs = document.getElementById('tabs');

tabs.addEventListener('click', (event) => {
    tabs.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    
    const picsContainer = document.getElementById('pics');
    const img = [...picsContainer.children];
    const sorted = img.sort(() => 0.5 - Math.random());
    const sortedImgs = sorted.map(img => img.outerHTML).join("");
    picsContainer.innerHTML = sortedImgs;
    })

const PICS = document.getElementById('pics');

PICS.addEventListener('click', (event) => {
    PICS.querySelectorAll('.flex-item').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})


