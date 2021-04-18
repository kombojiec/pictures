
import {getData} from '../utiles/api';

const styles = (buttonSelector) => {

  const button = document.querySelector(buttonSelector);

  function getTemplate(templateselector){
    return document.querySelector(templateselector)
    .content
    .querySelector('.styles-2')
    .cloneNode(true);
  }

  function createCard(name, src, link){
    const card = getTemplate('.style__template');
    card.classList.add('animated', 'fadeInUp');
    card.querySelector('img').setAttribute('src', src);
    card.querySelector('img').setAttribute('alt', name);
    card.querySelector('h4').textContent = name;
    card.querySelector('a').setAttribute('href', link);
    return card;
  }

  function renderCard(parentSelector, {name, src, link}){
    document.querySelector(parentSelector).append(createCard(name, src, link));
  }

  const data =  getData('https://pictures-546d3-default-rtdb.firebaseio.com/cards.json')
    .then(data => {
        button.addEventListener('click', () => {
      data.forEach(item => {
        renderCard('.styles .row', item);
      })
      button.remove();
    })
  });
}

export default styles;