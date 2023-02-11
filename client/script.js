



const form = document.querySelector('form');

const chatContainer = document.querySelector('#chat_container');


let loadInterval;


// NOTE loader is the function that makes the "..." when waiting for an answer from the momo ai
function loader(element) {
  element.textContent = '';


  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent === '....') {
      element.textContent = '';
    }
  }, 300)
}


