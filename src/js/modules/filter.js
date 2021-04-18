
const filter = () => {

  const menu = document.querySelector('.portfolio-menu');
  const buttons = menu.querySelectorAll('li'); 
  const allCases = document.querySelectorAll('.portfolio-block.all');
  const emptyCase = document.querySelector('.portfolio-no');

  function filterCard(){
    menu.addEventListener('click', event => {
      emptyCase.style.display = 'none';
      allCases.forEach(item => item.style.display = 'none');
      buttons.forEach(button => {
        if(button.classList.contains('active')){
          button.classList.remove('active');
        }
      })
      const target = event.target;
      let filter = '';
      target.classList.add('active');
      if(event.target && target.nodeName == 'LI'){
        filter = target.getAttribute('class').split(' ')[0];
      }
      if(filter){
        let items = 0;
        allCases.forEach(item => {
          if(item.classList.contains(filter)){
            item.style.display = 'block';
            ++items;
          }
        })
        if(!items){
          emptyCase.style.display = 'block';
        }
      }
    })
  }

  filterCard();
}

export default filter;