'use strict';

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-action="start"'),
  btnStop: document.querySelector('button[data-action="stop"'),
}

console.log(refs.btnStart);
console.log(refs.btnStop);

//console.log(refs.body);

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const changeBackground = {
  isActive: false,
  start() {
    if (!this.isActive) {
      this.isActive = true;
      this.change = setInterval(() => {
        const randomIntegerFromInterval = (min, max) => {
          return Math.floor(Math.random() * (max - min + 1) + min);
        };

        const backgroundColor = function (colors) {
          const index = randomIntegerFromInterval(0, colors.length - 1);
          for (let i = 0; i < colors.length; i += 1) {
            if (i === index) {
              console.log('i: ', i);
              return colors[i]
            }
          }

        };

        refs.body.style.backgroundColor = backgroundColor(colors);
      }, 1000)

    }
  }
}










refs.btnStart.addEventListener('click', changeBackground.start.bind(changeBackground));