/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        navMenu.style.display = navMenu.classList.contains('show-menu') ? 'block' : 'none';
    });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');

}
navLink.forEach((n) => n.addEventListener('click', linkAction));
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 80 viewport height, add the scroll-header class to heeader tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is greater than 350 viewport height, add the show-scroll class to scroll-top
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });
        target.classList.add('tab__active');
        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });
        tab.classList.add('tab__active');
    });
});
/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault();
    //check field if have the values
    if (contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === '') {
        //show message
        errorMessage.textContent = 'Write all the field'
    }
    else {
        //  serviceID - template - #form - publickey
        emailjs.sendForm('service_r4gp4zh', 'template_91xn2ds', '#contact-form', 'zEPhcisMEtsy2NP4P').then(() => {
            // show message and ass color, window + dot to open emoji
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message sent';

            //remove message after 5 second
            setTimeout(() => {
                errorMessage.textContent = '';
            }, 5000);
        }, (error) => {
            alert('OOPS! SOMETHING WENT WRONG', error);
        });
        // clear input fields
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }
};
;
contactForm.addEventListener('submit', sendEmail);