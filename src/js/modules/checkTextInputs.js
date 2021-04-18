
const checkTextInputs = (selector) => {

  const inputs = document.querySelectorAll(selector);

  inputs.forEach(input => {
    input.addEventListener('keypress', (event) => {
      if(event.key.match(/[^а-яё 0-9]/ig)){
        event.preventDefault();
      }
    })
  })

}

export default checkTextInputs;