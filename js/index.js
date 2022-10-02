
tippy('#home_t', {
    content: 'HOME',
    placement: 'right',
    theme: 'light',
    animation: 'fade',
});

tippy('#education_t', {
    content: 'EDUCATION',
    placement: 'right',
    theme: 'light',
    animation: 'fade',
});

tippy('#work_t', {
    content: 'WORK',
    placement: 'right',
    theme: 'light',
    animation: 'fade',
});

tippy('#skills_t', {
    content: 'SKILLS',
    placement: 'right',
    theme: 'light',
    animation: 'fade',
});

tippy('#projects_t', {
    content: 'PROJECTS',
    placement: 'right',
    theme: 'light',
    animation: 'fade',
});

tippy('#contact_t', {
    content: 'CONTACT US',
    placement: 'right',
    theme: 'light',
    animation: 'fade',
});

tippy('#navbar', {
    content: 'MENU',
    placement: 'right',
    theme: 'light',
    animation: 'fade',
});

tippy('#navbar_x', {
    content: 'BACK',
    placement: 'right',
    theme: 'light',
    animation: 'fade',
});

tippy('#gd', {
    content: 'Graphic Design',
    placement: 'left',
    theme: 'light',
    animation: 'fade',
});


tippy('#wd', {
    content: 'Web Design',
    placement: 'left',
    theme: 'light',
    animation: 'fade',
});

tippy('#html', {
    content: 'HTML',
    placement: 'left',
    theme: 'light',
    animation: 'fade',
});

tippy('#css', {
    content: 'CSS',
    placement: 'left',
    theme: 'light',
    animation: 'fade',
});

tippy('#js', {
    content: 'Javascript',
    placement: 'left',
    theme: 'light',
    animation: 'fade',
});

tippy('#jquery', {
    content: 'JQuery',
    placement: 'left',
    theme: 'light',
    animation: 'fade',
});

tippy('#react', {
    content: 'React',
    placement: 'left',
    theme: 'light',
    animation: 'fade',
});

tippy('#php', {
    content: 'PHP',
    placement: 'left',
    theme: 'light',
    animation: 'fade',
});

tippy('#wp', {
    content: 'WordPress',
    placement: 'left',
    theme: 'light',
    animation: 'fade',
});

tippy('#shopify', {
    content: 'Shopify',
    placement: 'left',
    theme: 'light',
    animation: 'fade',
});

// navbar

const navbar = document.getElementById('navbar');

navbar.addEventListener('click', function(){
    const collapse = document.getElementById('collapse');
    collapse.classList.add('active');
});

const navbar_x = document.getElementById('navbar_x');

navbar_x.addEventListener('click', function () {
    const collapse = document.getElementById('collapse');
    collapse.classList.remove('active');
});

const body = document.getElementsByClassName('body')[0];

body.addEventListener('click', function () {
    const collapse = document.getElementById('collapse');
    collapse.classList.remove('active');
});

// Cursor Style

new kursor({
    type: 4,
    color: '#2c3e50'
})

// Copyright

const cpyright = document.getElementById('cpyright');
let date = new Date();
date = date.getUTCFullYear();
cpyright.innerHTML = `${date}`;
