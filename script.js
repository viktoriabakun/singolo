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
    
    let subject = document.getElementById('subject').value.toString();
    document.getElementById('result').innerHTML = subject === '' ? 'Без темы' : 'Тема: ' + subject;
    let description = document.getElementById('description').value.toString();
    document.getElementById('textarea').innerHTML = description === '' ? 'Без описания' : 'Тема: ' + description;
    
    
});

closeButton.addEventListener('click', () => {
    document.getElementById('result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
    document.body.style.overflow='visible';
});