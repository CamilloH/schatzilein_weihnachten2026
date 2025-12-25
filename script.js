// Image URLs for each present
const images = [
  "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=300&h=300&fit=crop"
];

// Track which presents have been opened
const openedPresents = new Set();

// Open present and show image
function openPresent(stepNumber) {
  const imageContainer = document.getElementById(`image-${stepNumber}`);
  const present = event.target;
  
  // If already opened, do nothing
  if (openedPresents.has(stepNumber)) {
    return;
  }
  
  // Mark as opened
  openedPresents.add(stepNumber);
  
  // Hide the present emoji
  present.style.opacity = '0';
  present.style.transform = 'scale(0)';
  
  // Show the image
  const img = document.createElement('img');
  img.src = images[stepNumber - 1];
  img.alt = `Present ${stepNumber}`;
  img.className = 'revealed-image';
  
  imageContainer.appendChild(img);
  imageContainer.style.display = 'block';
  
  // Animate image appearance
  setTimeout(() => {
    img.style.opacity = '1';
    img.style.transform = 'scale(1)';
  }, 10);
}

// Create snowflakes animation
function createSnow() {
  const snowContainer = document.getElementById('snow');
  const snowflakeCount = 50;
  
  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.style.position = 'absolute';
    snowflake.style.width = Math.random() * 5 + 3 + 'px';
    snowflake.style.height = snowflake.style.width;
    snowflake.style.backgroundColor = 'white';
    snowflake.style.borderRadius = '50%';
    snowflake.style.opacity = Math.random() * 0.5 + 0.5;
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.top = Math.random() * -100 + 'px';
    snowflake.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
    snowflake.style.animationDelay = Math.random() * 2 + 's';
    snowContainer.appendChild(snowflake);
  }
  
  // Add CSS animation for falling snow
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      to {
        transform: translateY(100vh) translateX(20px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// Initialize snow when page loads
document.addEventListener('DOMContentLoaded', createSnow);
