// build the navigation menu based on the number of sections
(function buildNav() {
    const sections = document.querySelectorAll('section');
    const fragment = document.createDocumentFragment();

    for (const section of sections) {
        const li = document.createElement('li');
        const a = document.createElement('a')
        a.setAttribute('href', '#' + section.id);
        a.textContent = section.getAttribute('data-nav');
        a.className = 'menu__link'
        li.appendChild(a);
        fragment.appendChild(li);
    }
    document.getElementById('navbar__list').appendChild(fragment);
})();

// Add class 'active' to section when near top of viewport
/* 
* Start observer
*/
const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Element is in view, add 'active' class
            entry.target.parentElement.className = 'your-active-class';
        }
        else {
            // Remove 'active' class if elemnt isnt visible
            entry.target.parentElement.classList.remove('your-active-class');
        }
    });
});
// Get all section elements
const elements = [...document.querySelectorAll('.landing__container')];

// Observe all selected elements
elements.forEach((element) => intersectionObserver.observe(element));
/* 
* End observer
*/

// Event listeners

// Scroll to section on link click wiht event delegation
document.getElementById('navbar__list')
    .addEventListener('click', (event) => {
        // Prevent link from its default jump behaviour
        event.preventDefault();
        // Identify which section would be navigated to, to set offset
        const section = document.querySelector(event.target.getAttribute('href'));
        window.scrollTo({ top: section.offsetTop, behavior: 'smooth' })
    });
