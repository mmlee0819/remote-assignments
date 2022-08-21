/*
Assignment 4: HTML DOM and Event Handling
Request 1: Click to Change Text.
  When the user clicks on the "Welcome Message" block,
  change text to "Have a Good Time!".
*/

const welcomeBlock = document.querySelector('.welcome')

welcomeBlock.addEventListener('click', () => {
  const welcomeText = document.querySelector('.welcome p')
  welcomeText.textContent = 'Have a Good Time!'
})

/*
Request 2: Click to Show/Close Menu.
  When the user clicks the menu at the top-right corner, show the hidden mobile menu. 
  After that, the user can click the close button to hide it.
Hint: you may apply css position:fixed to create a floating mobile menu, 
  which may be out of screen at the beginning and totally separated from the original menu.
*/

// const menuItems = document.querySelector('.menu-items')
// menuItems.style.right = '-1000px'
// const mobileMenuArea = document.querySelector('.mobile-menu-area')

const mobileMenuArea = document.querySelector('.mobile-menu-area')

mobileMenuArea.addEventListener('click', (event) => {
  const menuItems = document.querySelector('.menu-items')
  const closeMenuBtn = document.querySelector('.close-menu-btn')
  console.log("add event listener")
  console.log("event.target.className:" + event.target.className)

  if (event.target.className === 'fa-solid fa-bars') {
    console.log(menuItems.style.right)
    menuItems.style.right = '0px'
    closeMenuBtn.style.right = '0px'
  } else if (event.target.className === 'close-menu-btn') {
    menuItems.style.right = '-1000px'
    closeMenuBtn.style.right = '-1000px'
  }
})



/*
Request 3: Click to Show More Content Boxes.
  There are some more content boxes waiting to show. When the user clicks the Call-to-Action
  button, show those hidden content boxes
Hint: all content boxes are already there, they are just set to display:none at the beginning
*/
const ActionBtn = document.querySelector('#action-btn')

ActionBtn.addEventListener('click', () => {
  const hiddenBlock = document.querySelector('.content-wrapper-hidden')
  if (hiddenBlock.style.display === 'none') {
    hiddenBlock.removeAttribute('style')
  } else {
    hiddenBlock.style.display = 'none'
  }
})
