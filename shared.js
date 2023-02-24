const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

const selectPlanButtons = document.querySelectorAll('.plan button');
const closeModelButton = document.querySelector('.modal__action--negative');

const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const closeModel = () => {
    backdrop.classList.remove('open');
    if (modal) {
        modal.classList.remove('open');
    }
};

for (const selectPlanButton of selectPlanButtons) {
    selectPlanButton.addEventListener("click", () => {
        backdrop.classList.add('open');
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
    backdrop.classList.add('open');
});

