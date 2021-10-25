window.addEventListener('load', ready);

let arr = [];

function ready(){

    let input = document.createElement('input');
    input.setAttribute('class', 'input');
    document.body.append(input);

    let button = document.createElement('button');
    button.textContent = "Add";
    button.setAttribute('onclick', 'add()')
    document.body.append(button);

    let div = document.createElement('div');
    div.id = 'container';
    document.body.append(div);

    let ul = document.createElement('ul');
    ul.id = 'ul';
    document.getElementById('container').append(ul);

    document.querySelector('.input').onkeydown = function(event){
        if (event.keyCode === 13) {
            add();
        }
    }
    if(!localStorage.getItem('task')){
        return arr;
    }else{
        const value = localStorage.getItem('task');
        const value1 = JSON.parse(value);
        for(let i = 0; i < value1.length; i++){
            const li = document.createElement('li');
            li.innerHTML = value1[i];
            document.querySelector('#ul').append(li);
        }
    }
}

function createLi(){
    const li = document.createElement('li'); 
        for(let i = 0; i < arr.length; i++) {
            li.innerHTML = arr[i];
            document.querySelector('#ul').append(li);
        }  
}

//JSON.parse(localStorage.getItem('task'));
function add(){ 
        arr.push(document.querySelector('.input').value);
        arr.sort();
        console.log(arr);
        let value = JSON.stringify(arr);
        console.log(value)
        localStorage.setItem('task', value)
        console.log(localStorage);
        document.querySelector('.input').value = '';
        createLi();
}
