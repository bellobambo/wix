let currentRotation = 0; // Initialize rotation at 0 degrees
const minRotation = 1; // Minimum limit
const maxRotation = 250; // Maximum limit

function rotateWheel(deg) {
  const newRotation = currentRotation + deg;

  // Check if new rotation exceeds the defined limits
  if (newRotation >= minRotation && newRotation <= maxRotation) {
    currentRotation = newRotation;
    const wheel = document.getElementById("wheel");
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    // Update rotation info display
    document.getElementById(
      "rotation-info"
    ).innerText = `Current Rotation: ${currentRotation}°`;
  } else {
    // Alert the user if they try to rotate beyond the limits
    if (newRotation < minRotation) {
      alert("Reached the minimum rotation limit!");
    } else if (newRotation > maxRotation) {
      alert("Reached the maximum rotation limit!");
    }
  }
}
