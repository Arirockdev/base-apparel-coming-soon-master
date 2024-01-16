const doc = document;

const input = doc.querySelector('#input');

const regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


const alert = doc.querySelector('.alert');
const imgP = doc.querySelector('.img-p');

const capturarInput = () =>{

  const inputValue = input.value;

  if(regExp.test(inputValue)){

    if(imgP.classList.contains('alert-email')){

      imgP.classList.remove('alert-email');

    }
  
    alert.innerHTML = ` <p class="alert-ok">Thank you, very much!!</p>`;

  }else {
  
    imgP.classList.add('alert-email');
  
    alert.innerHTML = ` <p class="alert-p">Please enter a valid email</p>`;
}

}


const btn = doc.querySelector('.btn');
btn.addEventListener('click', capturarInput);



