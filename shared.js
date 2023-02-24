const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

const selectPlanButtons = document.querySelectorAll('.plan button');
const closeModelButton = document.querySelector('.modal__action--negative');

const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const closeModel = () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
};

for (const selectPlanButton of selectPlanButtons) {
    selectPlanButton.addEventListener("click", () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
}

closeModelButton.addEventListener("click", closeModel);
backdrop.addEventListener("click", () => {
    mobileNav.style.display = 'none';
    closeModel();
});
toggleButton.addEventListener("click", () => {
    mobileNav.style.display = 'block';
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});

