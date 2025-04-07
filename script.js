const bunnyImages = [
    'bunny1.png',
    'bunny2.png',
    'bunny3.png',
    'bunny4.png'
  ];
  
  let score = 0;
  let timeLeft = 30;
  let gameInterval;
  let timerInterval;
  
  function startGame() {
    score = 0;
    timeLeft = 30;
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('timer').innerText = `Time: ${timeLeft}`;
    
    // Hide start button
    document.getElementById('startButton').style.display = 'none';
  
    // Start the game
    gameInterval = setInterval(showRandomBunny, 800);
    timerInterval = setInterval(updateTimer, 1000);
  }
  
  function updateTimer() {
    timeLeft--;
    document.getElementById('timer').innerText = `Time: ${timeLeft}`;
    
    if (timeLeft === 0) {
      clearInterval(gameInterval);
      clearInterval(timerInterval);
      alert(`Game Over! Your score: ${score}`);
      document.getElementById('startButton').style.display = 'inline-block'; // Show start button again
    }
  }
  
  function showRandomBunny() {
    const holes = document.querySelectorAll('.hole');
    const randomHole = holes[Math.floor(Math.random() * holes.length)];
    const bunny = randomHole.querySelector('.bunny');
    
    bunny.style.display = 'block';
    bunny.style.backgroundImage = `url(${bunnyImages[Math.floor(Math.random() * bunnyImages.length)]})`;
  
    setTimeout(() => {
      bunny.style.display = 'none';
    }, 600); // Bunny disappears after 600ms
  }
  
  document.querySelectorAll('.hole').forEach(hole => {
    hole.addEventListener('click', function () {
      const bunny = this.querySelector('.bunny');
      if (bunny.style.display === 'block') {
        score++;
        document.getElementById('score').innerText = `Score: ${score}`;
        bunny.style.display = 'none'; // Hide bunny after whacking
      }
    });
  });
  
  document.getElementById('startButton').addEventListener('click', startGame);
  
