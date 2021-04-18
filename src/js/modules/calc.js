
const calc = (sizeSelector, materialSelector, optionsSelector, promoSelector, resultSelector) => {

  const size = document.querySelector(sizeSelector);
  const material = document.querySelector(materialSelector);
  const options = document.querySelector(optionsSelector);
  const promo = document.querySelector(promoSelector);
  const result = document.querySelector(resultSelector);
  let total = 0;

  function calculateSum(){
    total = Math.round(+size.value * +material.value + +options.value);

    if(!size.value || !material.value){
      result.textContent = 'Пожалуйста, выберите размер и материал полотна';      
    }else if(promo.value.trim() == 'IWANTPOPART'){
      result.textContent = Math.round(total * 0.7);
    }else{
      result.textContent = total;
    }
    console.log(total);
  }

  size.addEventListener('change', calculateSum);
  material.addEventListener('change', calculateSum);
  options.addEventListener('change', calculateSum);
  promo.addEventListener('input', calculateSum);

}

export default calc;