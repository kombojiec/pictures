
import modal from './modules/modal';
import slider from './modules/slider';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modal();
  slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  slider('.main-slider-item', 'vertical');
  forms();

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