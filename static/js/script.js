// Define a constant for the maximum distance at which the dots should move away from the mouse
const MAX_DISTANCE = 40;

// Define a function to create the dots
function createDots(numDots) {
  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.top = Math.random() * window.innerHeight + 'px';
    dot.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(dot);
  }
}

// Call the createDots function with a number of dots to create
createDots(90);

// Add an event listener for the mousemove event on the document
document.addEventListener('mousemove', (e) => {
  // Get a NodeList of all the dots
  const dots = document.querySelectorAll('.dot');

  // Loop through each dot
  dots.forEach((dot) => {
    // Calculate the distance between the mouse and the dot
    const dx = e.clientX - dot.offsetLeft;
    const dy = e.clientY - dot.offsetTop;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // If the distance is less than the maximum distance, move the dot away from the mouse
    if (distance < MAX_DISTANCE) {
      const x = dot.offsetLeft + dx / distance * MAX_DISTANCE * 0.1;
      const y = dot.offsetTop + dy / distance * MAX_DISTANCE * 0.1;
      dot.style.left = x + 'px';
      dot.style.top = y + 'px';
    } 
    // Otherwise, reset the position of the dot to its initial position
    else {
      dot.style.top = dot.initialTop;
      dot.style.left = dot.initialLeft;
    }
  });
});

// Store the initial position of each dot as a property on the dot element
const dots = document.querySelectorAll('.dot');
dots.forEach((dot) => {
  dot.initialTop = dot.style.top;
  dot.initialLeft = dot.style.left;
});
