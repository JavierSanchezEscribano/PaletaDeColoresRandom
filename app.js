const colors = ["green", "red", "rgba(133,122,200)", "#f15098"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random number beetween 0 - 3 colors[3]
    const random = getRandomNumber();
    console.log(random);
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];

});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
};