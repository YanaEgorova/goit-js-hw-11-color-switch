"use strict";

class ChangeColors {
  constructor({ isActive = false, colors = ["#fff", "#000"] }) {
    this.isActive = isActive;
    this.colors = [...colors];
    this.refs = {
      btnStart: document.querySelector('button[data-action="start"]'),
      btnStop: document.querySelector('button[data-action="stop"]'),
      body: document.querySelector("body")
    };

    this.bindEvents();
  }

  starting() {
    if (this.isActive) {
      return;
    }

<<<<<<< HEAD
const changeBackground = {
  isActive: false,
  start() {

    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.changeId = setInterval(() => {
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


  },
  stop() {
    clearInterval(this.changeId)
  }
}


refs.btnStart.addEventListener('click', changeBackground.start.bind(changeBackground));

refs.btnStop.addEventListener('click', changeBackground.stop.bind(changeBackground));
=======
    this.isActive = true;

    this.timer = setInterval(() => {
      const nowIdxColor = this.randomIntegerFromInterval(
        0,
        this.colors.length - 1
      );
      console.log("Index color: ", nowIdxColor);

      this.refs.body.style.backgroundColor = this.colors[nowIdxColor];
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
    this.isActive = false;
    console.log("STOP");
  }

  bindEvents() {
    this.refs.btnStart.addEventListener("click", this.starting.bind(this));
    this.refs.btnStop.addEventListener("click", this.stop.bind(this));
  }

  randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

const changeColors = new ChangeColors({
  element: document.querySelector("body"),
  colors: ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"]
});
>>>>>>> master
