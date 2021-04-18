
import modal from './modules/modal';
import slider from './modules/slider';
import forms from './modules/forms';
import checkTextInputs from './modules/checkTextInputs';
import mask from './modules/mask';
import styles from './modules/styles';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modal();
  slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  slider('.main-slider-item', 'vertical');
  forms();
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  mask('[name="phone"]');
  styles('.button-styles');

  // https://pictures-546d3-default-rtdb.firebaseio.com/orders
  // fetch('https://pictures-546d3-default-rtdb.firebaseio.com/orders.json', {
  //   headers: {
  //     'Content-Type': 'application/json'
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   method: 'get',
  //   // body: JSON.stringify({name: 'value', phone: 'value'})
  // })
  // .then(res => res.json())
  // .then(res => console.log(res))
  
})