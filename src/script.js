const navDialogue = document.getElementById('nav-dialogue');
function handleMenu() {
    navDialogue.classList.toggle('hidden');
}

const initTranslateLTR = -48*4;
const initTranslateRTL = 36*4;

function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        }
        else {
            document.removeEventListener('scroll', scrollHandler);
        }
    }
    
    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        
        if (isLTR) {
            totalTranslate = translateX + initTranslateLTR;
        }
        else {
            totalTranslate = -(translateX + initTranslateRTL);
        }

        element.style.transform = 'translateX($(totalTranslate)px)';
    }
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);

const dtElements = document.querySelectorAll('dt');

dtElements.forEach(element => {
    
    element.addEventListener('click', () => {
        const ddID = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddID);
        const ddArrowIcon = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle(-rotate-180);
    })
})
