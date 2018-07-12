// IIFE
// Immediately Invoked Function Expression
(function() {

	var $registerBtn;
	var usernameFld;
	var passwordFld;
	var password2Fld;
	var userService = new AdminUserServiceClient();
	$(main);

	function main() {
		$registerBtn = $('#registerBtn');
		usernameFld = $('#username');
		passwordFld = $('#password');
		password2Fld = $('#vpassword');
		$("#registerBtn").click(registerHandler);
	}

	function registrationSuccessful() {
		alert('Registered Successfully!');
	}
	;

	function registrationFailed() {
		alert('Oops! Try again.');
	}
	;

	function registerHandler() {
		var usernameStr = usernameFld.val();
		var passwordStr = passwordFld.val();
		var password2Str = password2Fld.val();

		if (passwordStr != password2Str) {
			alert('Password and Verify Password do not match!');
			return;
		}

		var userObj = {
			username : usernameStr,
			password : passwordStr
		};

		var userObjStr = JSON.stringify(userObj);
		console.log(userObjStr);

		userService.register(userObjStr).then(registrationSuccessful,
				registrationFailed);

	}
})();