window.setTimeout(animation, 100)
window.setTimeout(animation2, 2000)
window.setTimeout(home, 3000)
window.setTimeout(home2, 4000)
window.setTimeout(home3, 10000)

function animation(){
  document.querySelector('img').src = "red.png"
document.querySelector('h1').innerHTML = " "
}

function animation2(){
  document.querySelector('img').src = "goof4.png"
document.querySelector('h1').innerHTML = " "
}

function home(){
document.querySelector('img').src = " "
document.querySelector('h1').innerHTML = "Your Ship Exploded"

}


function home2(){
document.querySelector('h1').innerHTML = "Making a Wormhole Back to Main Menu"

}
function home3(){
location.href = "index.html"
}