const words = [
  'Full Stack Developer',
  'Photographer',
  'Content Writer',
  'Mobile Developer',
]
let wordIndex = 0
let charIndex = 0
const typingSpeed = 100
const deletingSpeed = 50
const delayBetweenWords = 2000
const typedText = document.getElementById('typed-text')

function type() {
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(charIndex)
    charIndex++
    setTimeout(type, typingSpeed)
  } else {
    setTimeout(erase, delayBetweenWords)
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = words[wordIndex].substring(0, charIndex - 1)
    charIndex--
    setTimeout(erase, deletingSpeed)
  } else {
    wordIndex = (wordIndex + 1) % words.length
    setTimeout(type, typingSpeed)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, typingSpeed)
})

const currentYear = new Date().getFullYear()
document.querySelector('.date').textContent = currentYear
