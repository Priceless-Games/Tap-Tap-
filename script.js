let points = parseInt(localStorage.getItem('points')) || 0;

// Update points display on page load
document.addEventListener('DOMContentLoaded', () => {
  updatePointsDisplay();
});

// Increment points on button click
document.getElementById('counterButton').addEventListener('click', () => {
  points++;
  localStorage.setItem('points', points);
  updatePointsDisplay();
});

// Update points display
function updatePointsDisplay() {
  document.getElementById('pointsDisplay').innerText = `Points: ${points}`;
}
