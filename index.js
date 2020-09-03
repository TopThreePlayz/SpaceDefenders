function select(){





(async () => {

const { value: fruit } = await Swal.fire({
  title: 'Choose Level',
  input: 'select',
  inputOptions: {
     howto: 'Controls',
    apples: 'Level 1',
    bananas: 'Level 2',
     credits: 'Credits',
  },
  inputPlaceholder: 'Level',
  showCancelButton: false,
  inputValidator: (value) => {
    return new Promise((resolve) => {
      if (value === 'apples') {
        window.location.href = "level1.html"
      }

      if (value === 'howto') {
        window.location.href = "controls.html"
      }

      if (value === 'bananas') {
        window.location.href = "level2.html"
      }
      
       else {
        resolve('Level In Development.')
      }
    })
  }
})

if (fruit) {
  Swal.fire(`You selected: ${fruit}`)
}

})()

}





/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}