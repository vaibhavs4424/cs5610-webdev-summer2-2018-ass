function User(username, password, firstName, lastName, phone, email, dob, role) {
	this.username = username;
	this.password = password;
	this.firstName = firstName;
	this.lastName = lastName;
	this.phone = phone;
	this.email = email;
	this.dob = dob;
	this.role = role;
	// ...same for rest of properties…

	this.setUsername = setUsername;
	this.getUsername = getUsername;
	this.setPassowrd = setPassword;
	this.getPassword = getPassword;
	this.setFirstName = setFirstName;
	this.getFirstName = getFirstName;
	this.setPhone = setPhone;
	this.getPhone = getPhone;
	this.setEmail = setEmail;
	this.getEmail = getEmail;
	this.setDob = setDob;
	this.getDob = getDob;
	this.setRole = setRole;
	this.getRole = getRole;

	// ...same for rest of properties…

	function setUsername(username) {
		this.username = username;
	}
	function getUsername() {
		return this.username;
	}

	function setPassword(password) {
		this.password = password;
	}

	function getPassword() {
		return this.password;
	}

	function setFirstName(firstName) {
		this.firstName = firstName;
	}

	function getFirstName() {
		return this.firstName;
	}

	function setlastName(lastName) {
		this.lastName = lastName;
	}

	function getlastName() {
		return this.lastName;
	}

	function setEmail(email) {
		this.email = email;
	}
	function getEmail() {
		return this.email;
	}

	function setPhone(phone) {
		this.phone = phone;
	}
	function getPhone() {
		return this.phone;
	}

	function setDob(dob) {
		this.dob = dob;
	}
	function getDob() {
		return this.dob;
	}

	function setRole(role) {
		this.role = role;
	}
	function getRole() {
		return this.role;
	}

	// ...same for rest of properties…
}
