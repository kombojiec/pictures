
const modal = () => {

  let pressedButton = false;

  function bindModal(openButtonSelector, modalSelector, closeButtonSelector, destroy = false){

    const openButtons = document.querySelectorAll(openButtonSelector);
    const modal = document.querySelector(modalSelector);
    const closeButton = document.querySelector(closeButtonSelector);     
    const popups = document.querySelectorAll('[data-modal]');
    let scrollWidth = calculateScrollWidth();

    popups.forEach(popup => popup.classList.add('animated', 'fadeIn'));  
    
    openButtons.forEach(button => {
      button.addEventListener('click', () => {  
        pressedButton = true; 
        if(destroy){
          button.remove();
        }
        modal.style.display = 'block'
        document.body.classList.add('modal-open');
        document.body.style.marginRight = `${scrollWidth}px`;
      })
    })
    
    closeButton.addEventListener('click', event => {
      if(event.target){
        event.preventDefault();
      }
      closeModal();
    })

    modal.addEventListener('click', event => {
      if(event.target == event.currentTarget){
      closeModal();
      }
    })
    
    function closeModal(){
      popups.forEach(popup => {
        popup.style.display = 'none';
      })
      document.body.classList.remove('modal-open');
      document.body.style.marginRight = `0`;
    }
    
  } // <<== bindModal==>>

  function openModalByTime(selector, time){
    const popups = document.querySelectorAll('[data-modal]');
    let scrollWidth = calculateScrollWidth();
    setTimeout(() => {
      let isOpen = false;
      popups.forEach(popup => {
        if(window.getComputedStyle(popup).display != 'none'){
          isOpen = true;
        }
      })
      if(isOpen){
        return
      }
      document.querySelector(selector).style.display = 'block'
      document.body.classList.add('modal-open');
      document.body.style.marginRight = `${scrollWidth}px`
    }, time)
  }

  function openModalByScroll(){
    window.addEventListener('scroll', () => {
      if(!pressedButton && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        document.querySelector('.fixed-gift').click();
        pressedButton = true;
      }
    })
  }
  openModalByScroll();

  function calculateScrollWidth(){
    const box = document.createElement('div');
    box.style.width = '50px';
    box.style.height = '50px';
    box.style.overflowY = 'scroll';
    box.style.visability = 'hidden';

    document.body.appendChild(box);
    let scrollWidth = box.offsetWidth - box.clientWidth;
    box.remove();
    return scrollWidth;
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

  openModalByTime('.popup-consultation', 60*1000)

}

export default modal;