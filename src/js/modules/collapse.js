
const collapse = (title) => {

  const titles = document.querySelectorAll(title);

  titles.forEach(title => {
    title.nextElementSibling.classList.add('animated', 'fadeInUp');
  })

  titles.forEach(title => {
    title.addEventListener('click', function(){
      if(title.classList.contains('active')){
        title.classList.remove('active');
        title.nextElementSibling.classList.remove('active');
        return;
      }
      titles.forEach(title => {        
        title.classList.remove('active');
        title.nextElementSibling.classList.remove('active');
      });
      title.classList.add('active');
      title.nextElementSibling.classList.add('active');
    })
  })

}

export default collapse;