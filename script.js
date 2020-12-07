let character = document.getElementById('character')
let block = document.getElementById('block')

function jump(){
    if(character.classList != 'animate') {
        character.classList.add('animate')
    setTimeout(function(){
        character.classList.remove('animate')
    },500)
    }
}

let checkDead = setInterval(function() {
    //Get the top position of the character
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))

    //Get the left position of the block
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))

    if (blockLeft<20 && blockLeft>0 && characterTop>=130) {
        block.style.animation = 'none'
        alert("You're dead!")
    }
}, 10)