
const scroll = () => {

  const upButton = document.querySelector('.pageup');

  upButton.classList.add('animated');
  window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 1000){
      upButton.classList.add('fadeIn');
      upButton.classList.remove('fadeOut');
    }else{
      upButton.classList.add('fadeOut');
      upButton.classList.remove('fadeIn');
    }
  })

  const element = document.documentElement;
  const body = document.body;

  const calcScroll = () => {
    upButton.addEventListener('click', function(event){
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);

      if(this.hash != ''){
        event.preventDefault();
        let hashElement = document.querySelector(this.hash);
        let hashElementTop = 0;

        while(hashElement.offsetParent){
          hashElementTop += hashElement.offsetTop;
          hashElement = hashElement.offsetParent;
        }
        hashElementTop = Math.round(hashElementTop);
        smoothScroll(scrollTop, hashElementTop, this.hash);
      }
    })

    const smoothScroll = (from, to, hash) => {
      let timeInterval = 1;
      let prevScrollTop;
      let speed;

      to > from ? speed = 30: speed = -30;

      let move = setInterval(() => {
        let scrollTop = Math.round(body.scrollTop || element.scrollTop);
        if( prevScrollTop == scrollTop ||
          (to > from && scrollTop >= to) ||
          (to < from && scrollTop <= to)
        ){
          clearInterval(move);
          history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
        }else{
          body.scrollTop += speed;
          element.scrollTop += speed;
          prevScrollTop = scrollTop;
        }
      }, timeInterval);
    }

  }
  calcScroll();

}

export default scroll;


//  elem.offsetTop  получить высоту элемента
//  elem.scrollTop  получить высоту элемента от верха
//  document.documentElement.scrollTop   получить позицию от верха