const container = document.querySelector('.dot-container');
const DOT_COUNT = 50;
const THRESHOLD_DISTANCE = 100;

function createDot() {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  container.appendChild(dot);

  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  dot.style.transform = `translate(${x}px, ${y}px)`;
  
  dot.initialX = x;
  dot.initialY = y;
}

for (let i = 0; i < DOT_COUNT; i++) {
  createDot();
}

container.addEventListener('mousemove', e => {
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => {
    const dx = dot.offsetLeft - e.clientX;
    const dy = dot.offsetTop - e.clientY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < THRESHOLD_DISTANCE) {
      const angle = Math.atan2(dy, dx);
      const tx = e.clientX + Math.cos(angle) * THRESHOLD_DISTANCE;
      const ty = e.clientY + Math.sin(angle) * THRESHOLD_DISTANCE;
      dot.style.transform = `translate(${tx}px, ${ty}px)`;
    } else {
      dot.style.transform = `translate(${dot.initialX}px, ${dot.initialY}px)`;
    }
  });
});
