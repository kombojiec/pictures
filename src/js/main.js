
import modal from './modules/modal';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modal();
  slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  slider('.main-slider-item', 'vertical');
})