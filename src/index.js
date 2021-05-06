import './style/style.scss';
import {input, buttonOk, buttonSave, buttonOpenSave, ul, arr} from './variables';


buttonOk.onclick = function() {
    const li = document.createElement('li');
    li.innerHTML = input.value;
    arr.push(input.value);
    console.log(arr);
    ul.append(li);
    li.onclick = function () {
        let isClicked = li.getAttribute('clicked');
        if(!isClicked) {
            li.setAttribute('clicked', true);
            li.style.textDecoration = 'line-through';
        } else {
            li.removeAttribute('clicked');
            li.style.textDecoration = 'none';
        }
    }
    const button = document.createElement('button');
    button.innerHTML = 'delete';
    li.after(button);
    button.onclick = function () {
        arr.splice(arr.indexOf(li.innerText), 1);
        console.log(arr);
        li.remove();
        button.remove();
    }
    input.value = "";
}

buttonSave.onclick = function() {
    localStorage.setItem('list', JSON.stringify(arr));
}

buttonOpenSave.onclick = function() {
    for (let i= 0; i < JSON.parse(localStorage.getItem('list')).length; i++) {
        let saveLi = document.createElement('li');
        saveLi.innerHTML = JSON.parse(localStorage.getItem('list'))[i];
        ul.append(saveLi);
    }
}
