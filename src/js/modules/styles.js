
const styles = (buttonSelector, styleselector) => {

  const styles = document.querySelectorAll(styleselector);
  const button = document.querySelector(buttonSelector);

  button.addEventListener('click', () => {
    styles.forEach(style => {
      style.classList.add('animated', 'fadeInUp');
    })
    styles.forEach(style => {
      style.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs')
      style.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
    })
  })

}

export default styles;