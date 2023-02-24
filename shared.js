const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

const selectPlanButtons = document.querySelectorAll('.plan button');
const closeModelButton = document.querySelector('.modal__action--negative');
const closeModalOptions = [backdrop, closeModelButton];

for (const selectPlanButton of selectPlanButtons) {
    selectPlanButton.addEventListener("click", (e) => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
}

for (const closeModalOption of closeModalOptions) {
    closeModalOption.addEventListener("click", (e) => {
        backdrop.style.display = 'none';
        modal.style.display = 'none';
    });
}
