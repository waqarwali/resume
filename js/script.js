const face = document.querySelector('.face-container');
const eyes = document.querySelectorAll('.eye');
const clickableElements = document.querySelectorAll('a, button, .nav-link'); // Select clickable elements

// Function to move eyes based on cursor position
document.addEventListener('mousemove', (e) => {
  const x = e.clientX - window.innerWidth / 2;
  const y = e.clientY - window.innerHeight / 2;

  const angle = Math.atan2(y, x);

  const eyeX = Math.cos(angle) * 10; // Eye movement in X-axis
  const eyeY = Math.sin(angle) * 10; // Eye movement in Y-axis

  eyes.forEach((eye) => {
    eye.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
  });
});

// Add hover effects for clickable elements
clickableElements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    face.style.opacity = '0.5'; // Make the face semi-transparent
  });

  element.addEventListener('mouseout', () => {
    face.style.opacity = '1'; // Restore full opacity
  });

  element.addEventListener('click', () => {
    face.style.opacity = '0.8'; // Slightly reduce opacity on click
    setTimeout(() => {
      face.style.opacity = '1'; // Restore full opacity after 300ms
    }, 300);
  });
})
