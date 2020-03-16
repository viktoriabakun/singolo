// activating navigation links
const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('.nav-style').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

// buttons in portfolio will call randomizing the pictures  ->
const tabs = document.getElementById('tabs');
tabs.addEventListener('click', (event) => {
    tabs.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');

    const picsContainer = document.getElementById('pics');
    const img = [...picsContainer.children];
    const sorted = img.sort(() => 0.5 - Math.random());
    const sortedImgs = sorted.map(img => img.outerHTML).join("");
    picsContainer.innerHTML = sortedImgs;
    });

// the border of the pics ->
const PICS = document.getElementById('pics');

PICS.addEventListener('click', (event) => {
    PICS.querySelectorAll('.flex-item').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

// get a quote. модалочка

const button = document.getElementById('btn');
const closeButton = document.getElementById('close-btn');

button.addEventListener('click', () => {
    document.body.style.overflow='hidden';
    event.preventDefault();
    document.getElementById('message-block').classList.remove('hidden');
    const subject = document.getElementById('result').value.toString();
    document.getElementById('subject').innerText = subject;
    const description = document.getElementById('textarea').value.toString();
    document.getElementById('description').innerText = description;
    
});


closeButton.addEventListener('click', () => {
    document.getElementById('result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
});
