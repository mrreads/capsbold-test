const wrapper = document.querySelector('.todo');
let iterator = 0;

function generateItem() {
    wrapper.innerHTML += `
    <label for="todo_${iterator}" class="todo__item">
        <input id="todo_${iterator}" type="checkbox" class="todo__checkbox" />
        <div class="todo__label"> </div>
        
        <p class="todo__title">repellendus sunt dolores architecto voluptatum</p>
        <p class="todo__description">laboriosam mollitia et enim quasi adipisci quia provident illum</p>
    </label>`;

    iterator++;
}

for(let i = 1; i <= 4; i++) {
    generateItem();
}

const button = document.querySelector('.wrapper__button');
button.addEventListener('click', generateItem);