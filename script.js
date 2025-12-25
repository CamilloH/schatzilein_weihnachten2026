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

// Show surprise message
function showMessage() {
  const messages = [
    "🎄 Merry Christmas! 🎄",
    "🎅 Ho Ho Ho! 🎅",
    "❄️ Happy Holidays! ❄️",
    "🎁 Wishing you joy! 🎁",
    "✨ May your days be merry and bright! ✨"
  ];
  
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
}

// Initialize snow when page loads
document.addEventListener('DOMContentLoaded', createSnow);

