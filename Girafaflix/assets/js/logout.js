  const registerButton = document.querySelector('.login');
  const loginButton = document.querySelector('.cadastro');

  registerButton.addEventListener('click', function() {
    alert('Welcome to Girafaflix, User! Enjoy your experience in the 7th art!');
  });

  loginButton.addEventListener('click', function() {
    window.location.href = "logout.html";
  });

