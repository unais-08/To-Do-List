const input = document.querySelector('.form input');
const submit = document.querySelector('.btn');
const ul = document.querySelector('.list');
const errorMssg = document.querySelector('.error');
const li = document.querySelector('.list-items');


function addTask() {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        errorMssg.style.display = 'none';

        if (input.value == "") {
            errorMssg.style.display = 'block';
        } else {
            const li = document.createElement('li');
            li.classList.add('list-items');
            li.classList.add('list-items-typo');
            li.innerText = input.value;
            ul.appendChild(li);
            input.value = "";
            li.addEventListener('click', (e) => {
                li.remove();
            })
        }
    });

}


addTask();
