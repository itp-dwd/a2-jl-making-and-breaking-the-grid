window.onload = function(){
  const $app = document.querySelector('#app');

  $app.addEventListener('click', (e) => {
    console.log($app.style.backgroundColor)
    if( $app.style.backgroundColor === 'rgb(255, 215, 0)'){
      $app.style.backgroundColor = '#FEED00';
    } else {
      $app.style.backgroundColor = '#FFD700';
    }
  });



}