const myImage = document.querySelector('img')

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/website-screenshot.png') {
    myImage.setAttribute('src', 'images/wallpaper.jpg')
  } else {
    myImage.setAttribute('src', 'images/website-screenshot.png')
  }
}

const myButton = document.querySelector('button')
const myHeading = document.querySelector('h1')

function setUserName () {
  const myName = prompt('Please enter your name.')
  if (!myName) {
    setUserName()
  } else {
    localStorage.setItem('name', myName)
    myHeading.textContent = `Mozilla is cool, ${myName}`
  }
}

if (!localStorage.getItem('name')) {
  setUserName()
} else {
  const storedName = localStorage.getItem('name')
  myHeading.textContent = `Mozilla is cool, ${storedName}`
}

myButton.onclick = function () {
  setUserName()
}
