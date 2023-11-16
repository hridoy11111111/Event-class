const changeButton = document.getElementById('change');
changeButton.addEventListener('click',function(){
    document.body.style.innerText = 'Hello Everyone'
})
// console.log(click);

function makered(){
    document.body.style.backgroundColor = 'red'
}

function makegreen(){
    document.body.style.backgroundColor = 'green'
}

const blueButton = document.getElementById("make-blue");
blueButton.onclick = makeblue;
function makeblue() {
    document.body.style.backgroundColor = 'blue'
}
// console.log(blueButton);

const aquaButton = document.getElementById("make-aqua");
aquaButton.onclick = function(){
    document.body.style.backgroundColor = 'aqua'
}

const purpleButton = document.getElementById("purple");
purpleButton.addEventListener('click',function(){
    document.body.style.backgroundColor = 'purple'
})

document.getElementById("black").addEventListener('click',function(){
    document.body.style.backgroundColor = 'black'
})








