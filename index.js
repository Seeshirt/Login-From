





function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;


  console.log(username);
  console.log(password);

  if (username === localStorage.getItem("username") && password === localStorage.getItem("password") ) {
      document.getElementById('message').innerText = "Login successful!";
  } else {
      document.getElementById('message').innerText = 'Invalid username or password';
  }
}

function forgotPassword() {
  var username = document.getElementById('username').value;
  var newpassword = document.getElementById('password').value;
  localStorage.setItem("password",newpassword)
  alert("Forgot Password for user: " + username);
}

function register() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  localStorage.setItem("username",username)
  localStorage.setItem("password",password)
 
}

