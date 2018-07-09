// IIFE
// Immediately Invoked Function Expression
(function () {

  var registerBtn = jQuery('#registerBtn');
  var usernameFld = $('#username');
  var passwordFld = $('#password');
  var password2Fld = $('#password2');

  registerBtn.click(registerHandler);
  
  function registrationSuccessful()
  {
	  alert('Yay');
  };
  
  function registrationFailed()
  {
	  alert('Oops');
  };

  function registerHandler() {
    var usernameStr = usernameFld.val();
    var passwordStr = passwordFld.val();
    var password2Str = password2Fld.val();

    var userObj = {
      username: usernameStr,
      password: passwordStr
    };

    var userObjStr = JSON.stringify(userObj);
    console.log(userObjStr);
    
    fetch('/register', {
      method: 'post',
      body: userObjStr,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(registrationSuccessful,registrationFailed);

  }
})();