const addFrom = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');



const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
    </li>
    
    `;
    list.innerHTML += html;

};

addFrom.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addFrom.add.value.trim();
    // console.log(todo);
    if (todo.length) {
        generateTemplate(todo);
        addFrom.reset();
    }

});

// delete todos
list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {

    Array.from(list.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.add('filtered'));


};

// Search a todo
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    // console.log(term);
    filterTodos(term);

});