(function() {
	var $usernameFld, $phoneFld, $emailFld, $roleFld, $dobFld;
	var $updateBtn, $logoutBtn;
	var userService = new AdminUserServiceClient();
	$(main);

	function main() {
		$usernameFld = $("#username");
		$phoneFld = $("#phone");
		$emailFld = $("#emailId");
		$roleFld = $("#role");
		$updateBtn = $("#updateBtn");
		$logoutBtn = $("#logoutBtn");
		$dobFld = $('#dob');
		userService.profile().then(setUserProfile);
		$updateBtn.click(updateProfile);
		$logoutBtn.click(logoutUser);

	}

	function setUserProfile(user) {
		$usernameFld.val(user.username);
		$phoneFld.val(user.phone);
		$emailFld.val(user.email);
		$roleFld.val(user.role);
		console.log(user.dob);
		var date = new Date(user.dob);
		console.log(date.toISOString().slice(0, 10));
		$dobFld.val(date.toISOString().slice(0, 10));

	}

	function updateProfile() {

		var user = {
			username : $usernameFld.val(),
			phone : $phoneFld.val(),
			role : $roleFld.val(),
			dob : $dobFld.val(),
			email : $emailFld.val()
		}
		console.log(user.dob);
		userService.updateProfile(user).then(function(response) {
			alert('Profile Updated successful!');
		});
	}

	function logoutUser() {
		userService.logout().then(function(response) {
			window.location.href = "../login/login.template.client.html";
		})

	}

})();