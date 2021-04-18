
import {postData} from '../utiles/api';

const forms = () => {

  const forms = document.querySelectorAll('form');
  const allInputs = document.querySelectorAll('input');
  const popups = document.querySelectorAll('[data-modal');
  const path = {
    disigner: 'https://pictures-546d3-default-rtdb.firebaseio.com/images.json',
    question: 'https://pictures-546d3-default-rtdb.firebaseio.com/orders.json'
  }
  const message = {
    loading: 'Идёт отпрака данных...',
    sucsess: 'Спасибо, мы с вами свяжемся',
    fail: 'Упс... Что-то пошло не так...',
    ok: './assets/img/ok.png',
    spinner: './assets/img/spinner.gif',
    failure: './assets/img/fail.png',
  }
  
  forms.forEach(form => {   
    const uploads = document.querySelectorAll('[name="upload"]')
    uploads.forEach(input => {
      let dots, length, name;
      input.addEventListener('input', () => {
        const arr = input.files[0].name.split('.');
        length = arr[0].length;
        length >6 ? dots = '...': dots = '.';
        name = arr.join(dots);
        input.previousElementSibling.textContent = name;
      })
    })

    form.addEventListener('submit', event => {
      event.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.parentNode.appendChild(statusMessage);
      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        form.style.display = 'none';
      },500)

      const statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg)
      let statusMessageText = document.createElement('div');
      statusMessageText.textContent = message.loading;
      statusMessage.appendChild(statusMessageText);

      let apiPath;
      form.closest('.popup-design')? apiPath = path.disigner: apiPath = path.question;

      let data = {};
      const inputs = form.querySelectorAll('input');
      inputs.forEach(input => {
        data[input.name] = input.value;
      })

      postData(apiPath, data)
        .then(res => {
          statusImg.setAttribute('src', message.ok);
          statusMessageText.textContent = message.sucsess;
          return res;
        })
        .then(res => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error)
          statusMessageText.textContent = message.fail;
          statusImg.setAttribute('src', message.failure);
        })
        .finally(() => {
          data = {};
          allInputs.forEach(input => input.value = '');
          uploads.forEach(input => {
            input.previousElementSibling.textContent = 'Файл не выбран';
          })
          setTimeout(() => {
            statusMessage.remove();
            form.style.display = 'block';
            form.classList.remove('fadeOutUp');
            form.classList.add('fadeInUp');
            setTimeout(() => {
              popups.forEach(popup => {
                popup.style.display = 'none';
                document.body.classList.remove('modal-open');
              })
            }, 1000)
          }, 2000)
        })
      })
  })

}

export default forms;

 // https://pictures-546d3-default-rtdb.firebaseio.com/orders.json
 // https://pictures-546d3-default-rtdb.firebaseio.com/images.json
