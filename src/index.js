window.addEventListener('load', ready);

let arr = [];

function ready(){

    let input = document.createElement('input');
    input.classList.add('input');
    document.body.append(input);

    let button = document.createElement('button');
    button.textContent = "Add";
    button.addEventListener('click', add)
    document.body.append(button);

    let div = document.createElement('div');
    div.id = 'container';
    document.body.append(div);

    let ul = document.createElement('ul');
    ul.id = 'ul';
    document.querySelector('#container').append(ul);

    document.querySelector('.input').onkeydown = function(event){
        if (event.keyCode === 13) {
            add();
        }
    }
    if(!localStorage.getItem('task')){
        return arr;
    }else{
        const value = JSON.parse(localStorage.getItem('task'));
        for(let i = 0; i < value.length; i++){
            const li = document.createElement('li');
            li.innerHTML = value[i];
            document.querySelector('#ul').append(li);
        }
    }
}

function createLi(){
    const li = document.createElement('li'); 
    const ul = document.querySelector('#ul');
        for(let i = 0; i < arr.length; i++) {
            li.innerHTML = arr[i];
            ul.append(li);
        }  
        let arr2 = [];
        // Add all list to a new array
        for (let i = 0; i < ul.childNodes.length; i++) {
            arr2.push(ul.childNodes[i].innerHTML);
        }
        // Sort the list
        arr2.sort();
        ul.innerHTML = '';//если убрать этот параметр то при каждом новом добавлении элемента в список,
        
        //add all arr to a new list
        for (let j = 0; j < arr2.length; j++) {
            let li = document.createElement('li');
            li.innerHTML = arr2[j];
            ul.append(li);
        }
}

function add(){ 
        if(document.querySelector('.input').value.trim().length === 0){
            return;
        }
        arr.push(document.querySelector('.input').value);
        createLi();
        let value = JSON.stringify(arr);
        localStorage.setItem('task', value);
        document.querySelector('.input').value = '';
}
