function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'Parul' && password === 'P@123') {
      document.getElementById('message').innerText = "Login successful!";
  } else {
      document.getElementById('message').innerText = 'Invalid username or password';
  }
}

function forgotPassword() {
  var username = document.getElementById('username').value;
  alert("Forgot Password .");
}

function register() {
 
}

