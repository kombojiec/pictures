
const slider = (slideSelector, direct, prevButtonSelector, nextButtonSelector, moveStep = 1) => {
  const slides = document.querySelectorAll(slideSelector);
  const direction = direct;
  let paused = false;

  let currentSlide = 0;

  function showSlide(value){
    if(value >= slides.length){
      currentSlide = 0;
    }else if(value < 0){
      currentSlide = slides.length - 1; 
    }else{
      currentSlide = value;
    }
    
    slides.forEach(slide => {
      slide.classList.add('animated');
      slide.style.display = 'none';
    })
    slides[currentSlide].style.display = 'block';
  }
  showSlide(currentSlide);

  function setSlide(moveStep){
    showSlide(currentSlide + moveStep);
  }

  try{
    const prevButton = document.querySelector(prevButtonSelector);
    const nextButton = document.querySelector(nextButtonSelector)

    prevButton.addEventListener('click', () => {
      setSlide( -moveStep);
      slides[currentSlide].classList.remove('slideInLeft');
      slides[currentSlide].classList.add('slideInRight');
    })

    nextButton.addEventListener('click', () => {
      setSlide(moveStep);
      slides[currentSlide].classList.remove('slideInRight');
      slides[currentSlide].classList.add('slideInLeft');
    })
  }catch(error){
    
  }

  function activateSlider(){
    if(direction == 'vertical'){
      paused = setInterval(() => {
        setSlide(moveStep);
        slides[currentSlide].classList.add('slideInDown');
      }, 3000);
    }else{
      paused = setInterval(() => {
        setSlide( -moveStep);
        slides[currentSlide].classList.remove('slideInLeft');
        slides[currentSlide].classList.add('slideInRight');
      }, 3000)
    }
  }
  activateSlider();

  slides[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  })
  slides[0].parentNode.addEventListener('mouseleave', () => {
    activateSlider();
  })

}

export default  slider;