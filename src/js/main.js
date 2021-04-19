
import modal from './modules/modal';
import slider from './modules/slider';
import forms from './modules/forms';
import checkTextInputs from './modules/checkTextInputs';
import mask from './modules/mask';
import styles from './modules/styles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import collapse from './modules/collapse';
import burger from './modules/burger';
import scroll from './modules/scroll';

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
  calc('#size', '#material', '#options', '.promocode', '.calc-price');
  filter();
  pictureSize();
  collapse('.accordion-heading');
  burger('.burger', '.burger-menu');
  scroll();

  
})