document.addEventListener('DOMContentLoaded', function() {
  var adsButton = document.getElementById('adsButton');
  var adsWindow = document.getElementById('adsWindow');

  adsButton.addEventListener('click', function() {
    if (adsWindow.style.display === 'none' || adsWindow.style.display === '') {
      adsWindow.style.display = 'block';
    } else {
      adsWindow.style.display = 'none';
    }
  });
});

// text animation
// const textElement = document.getElementById('text');
// const words = ['Here','what','happens','next.']; // Add your words here
// let wordIndex = 0;
// let letterIndex = 0;

// function showLetter() {
//   if (wordIndex < words.length) {
//     const word = words[wordIndex];
//     if (letterIndex < word.length) {
//       textElement.textContent += word[letterIndex];
//       letterIndex++;
//     } else {
//       textElement.textContent += ' ';
//       wordIndex++;
//       letterIndex = 0; 
//     }
//     setTimeout(showLetter, 40); // Adjust speed here (milliseconds)
//   }
// }

// showLetter();

// class TextAnimation

class TextAnimation {
  constructor(textElement, words, speed = 40) {
    this.textElement = textElement;
    this.words = words;
    this.speed = speed;
    this.wordIndex = 0;
    this.letterIndex = 0;
  }

  showLetter() {
    if (this.wordIndex < this.words.length) {
      const word = this.words[this.wordIndex];
      if (this.letterIndex < word.length) {
        this.textElement.textContent += word[this.letterIndex];
        this.letterIndex++;
      } else {
        this.textElement.textContent += ' ';
        this.wordIndex++;
        this.letterIndex = 0;
      }
      setTimeout(() => this.showLetter(), this.speed);
    }
  }

  startAnimation() {
    this.showLetter();
  }
}

// Usage example:
const textElement = document.getElementById('text');
const words = ['Here', 'what', 'happens', 'next.']; // Add your words here
const animation = new TextAnimation(textElement, words, 40); // Adjust speed here (milliseconds)
animation.startAnimation();
