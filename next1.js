var wait = 1;

function next(){
    let timerInterval
Swal.fire({
  title: 'Amazing Job!',
  html: 'Loading Next Level',
  timer: 2000,
  timerProgressBar: true,
  onBeforeOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          b.textContent = Swal.getTimerLeft()
        }
      }
    }, 100)
  },
  onClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }

  wait++
})

if(wait > 2 ){

  after()

}


}

setTimeout(after, 2000);

function after(){

  window.location.href = "easy2.html"
}