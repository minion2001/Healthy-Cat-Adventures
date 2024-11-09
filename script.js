let health = 50; // Initial health level (50%)
const catImage = document.getElementById('cat-image');
const healthMeter = document.getElementById('health-meter');

// Define foods with calorie values and health effects
const foods = {
  apple: { calories: 50, effect: 5 },
  carrot: { calories: 30, effect: 3 },
  burger: { calories: 300, effect: -10 },
  soda: { calories: 150, effect: -5 },
  candy: { calories: 200, effect: -7 }
};

// Feed the cat function
function feedCat(food) {
  const foodItem = foods[food];
  
  // Adjust health based on food effect
  health += foodItem.effect;
  health = Math.min(Math.max(health, 0), 100); // Keep health between 0 and 100
  
  // Update health meter
  healthMeter.textContent = `Health: ${health}%`;
  
  // Update cat image based on health
  if (health >= 70) {
    catImage.style.transform = 'scale(1.2)'; // Healthy and big
    healthMeter.style.color = 'green';
  } else if (health < 70 && health > 30) {
    catImage.style.transform = 'scale(1)'; // Normal
    healthMeter.style.color = 'orange';
  } else {
    catImage.style.transform = 'scale(0.8)'; // Unhealthy and small
    healthMeter.style.color = 'red';
  }
  
  // Display feedback message
  alert(`You fed the cat ${food}! It had ${foodItem.calories} calories.`);
}
