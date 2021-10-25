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
    
    localStorage.getItem('task');
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
        localStorage.setItem('task', arr);
        console.log(arr);
        document.querySelector('.input').value = '';
        
        createLi();
}

        