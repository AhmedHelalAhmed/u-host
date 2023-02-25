const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

const selectPlanButtons = document.querySelectorAll('.plan button');
const closeModelButton = document.querySelector('.modal__action--negative');

const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const closeModel = () => {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(() => {
        backdrop.style.display = 'none';
    }, 200);
};

for (const selectPlanButton of selectPlanButtons) {
    selectPlanButton.addEventListener("click", () => {
        backdrop.style.display = 'block';
        setTimeout(() => {
            backdrop.classList.add('open');
        }, 10);
        modal.classList.add('open');
    });
}
if (closeModelButton) {
    closeModelButton.addEventListener("click", closeModel);
}
backdrop.addEventListener("click", () => {
    mobileNav.classList.remove('open');
    closeModel();
});
toggleButton.addEventListener("click", () => {
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(() => {
        backdrop.classList.add('open');
    }, 10);
});

