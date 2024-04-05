document.getElementById('LoginFrom').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
 
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  
  if (username === 'admin' && password === 'password') {
    
    alert('Login successful!');
  } else {
    document.getElementById('error-msg').textContent = 'Invalid username or password';
  }
});
  