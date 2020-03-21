//______________________NAVIGATION LINKS____________________________________
const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('.nav-style').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});


//______________________SCROLL_________________________________________________
document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY + 95;
    const divs = [...document.querySelectorAll('#wrapper>div')].filter(d => d.hasAttribute('id'));
    const links = document.querySelectorAll('#menu a');

    divs.forEach((el) => {
        if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) >= curPos) {
            console.log('curPos: ' + curPos + 'elOffset: ' + el.offsetTop);
            links.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    });
}

//________________________SLIDER_______________________________________________

let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}
function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n - 1);
    showItem('from-right');
}

document.querySelector('.control.left').addEventListener('click', function () {
    if (isEnabled) {
        previousItem(currentItem)
    }
});


document.querySelector('.control.right').addEventListener('click', function () {
    if (isEnabled) {
        nextItem(currentItem)
    }
});


//______________________ PORTFOLIO_____________________________________________
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


//___________________________MODAL_WINDOW____________________________________
const button = document.getElementById('btn');
const closeButton = document.getElementById('close-btn');

button.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
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
    document.body.style.overflow = 'visible';
});