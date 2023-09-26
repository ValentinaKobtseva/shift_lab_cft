const form = document.getElementById('search-form');

function find(resultNode, searchColumn) {
    const search = document.getElementById('input-id').value.toLowerCase();

    if (search.length !== 0) {
        let s = 0;
        for (let i = 0; i < searchColumn.length; i++) {
            if (searchColumn[i].innerHTML.toLowerCase().includes(search)) {
                s += 1;
                searchColumn[i].classList.add('searched');
            }
        }
        if (s === 0) {
            return document.createTextNode('Упс, ничего не найдено!');
        } else {
            return document.createTextNode(`Результатов поиска: ${s}`);
        }
    } else {
        return document.createTextNode('Введите текст для поиска!');
    }
}

form.addEventListener('submit', (event) => {
    let resultNode = document.querySelector('.result');
    let searchColumn = document.querySelectorAll('.column2');
    event.preventDefault();
    resultNode.innerText = "";
    searchColumn.forEach(el => el.classList.remove('searched'));
    resultNode.appendChild(find(resultNode, searchColumn));
});