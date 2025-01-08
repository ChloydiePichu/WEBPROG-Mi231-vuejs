const buttons = document.querySelectorAll('.button-container button');
const displayBox = document.getElementById('display-box');
const contentElements = {}; 
const app = Vue.createApp({
  data() {
    return {
      message: "Hello World!"
    }
  },
  computed: {
    randomNumber() {
      return Math.ceil(Math.random() * 6);
    }
  }
})
  
  app.mount('#app')

document.querySelectorAll('.hidden-content').forEach(element => {
    contentElements[element.id] = element.innerHTML;
    element.remove();
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        if (contentElements[targetId]) {
            displayBox.innerHTML = contentElements[targetId];
        }
    });
});