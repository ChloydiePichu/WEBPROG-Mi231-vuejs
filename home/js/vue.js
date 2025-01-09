const buttons = document.querySelectorAll('.button-container button');
const displayBox = document.getElementById('display-box');
const contentElements = {}; 
const app = Vue.createApp({
   data() {
    return {
      manyFoods: [
        {name: 'Burrito', url: 'img_burrito.svg'},
        {name: 'Salad', url: 'img_salad.svg'},
        {name: 'Cake', url: 'img_cake.svg'},
        {name: 'Soup', url: 'img_soup.svg'},
        {name: 'Fish', url: 'img_fish.svg'},
        {name: 'Pizza', url: 'img_pizza.svg'},
        {name: 'Rice', url: 'img_rice.svg'}
      ]
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
