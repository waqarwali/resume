const cursorOrb = document.getElementById('cursorOrb');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Move the orb to follow the cursor
  cursorOrb.style.transform = `translate(${x}px, ${y}px)`;
});
