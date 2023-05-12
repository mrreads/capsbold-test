const wrapper = document.querySelector('.todo');
let iterator = 0;

function generateItem() {
    wrapper.innerHTML += `
    <div class="todo__item">
        <input id="todo_${iterator}" type="checkbox" class="todo__checkbox" />
        <label for="todo_${iterator}" class="todo__label"> </label>
        
        <p class="todo__title">repellendus sunt dolores architecto voluptatum</p>
        <p class="todo__description">laboriosam mollitia et enim quasi adipisci quia provident illum</p>
    </div>`;

    iterator++;
}

for(let i = 1; i <= 3; i++) {
    generateItem();
}

const button = document.querySelector('.wrapper__button');
button.addEventListener('click', generateItem);