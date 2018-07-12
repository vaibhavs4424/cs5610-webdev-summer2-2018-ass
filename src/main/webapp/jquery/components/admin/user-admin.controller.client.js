(function() {
	var $usernameFld, $passwordFld;
	var $removeBtn, $editBtn, $createBtn;
	var $firstNameFld, $lastNameFld;
	var template, tbody, selectedId;
	var userService = new AdminUserServiceClient();
	$(main);

	function main() {

		tbody = $('tbody');
		template = $('.template');
		$('#createUser').click(createUser);
		$('#updateUser').click(updateUser);

		findAllUsers();
	}
	function createUser() {
		$usernameFld = $('#usernameFld').val();
		$passwordFld = $('#passwordFld').val();
		$firstNameFld = $('#firstNameFld').val();
		$lastNameFld = $('#lastNameFld').val();
		var role = $('#roleFld').val();
		var user = {
			"username" : $usernameFld,
			"password" : $passwordFld,
			"firstName" : $firstNameFld,
			"lastName" : $lastNameFld,
			"role" : role
		};

		userService.createUser(user).then(findAllUsers);
	}
	function findAllUsers() {
		userService.findAllUsers().then(renderUsers);
	}
	function findUserById(userId) {

		userService.findUserById(userId).then(renderUser);
	}

	function deleteUser() {
		var deleteBtn = $(event.currentTarget);
		console.log(deleteBtn);
		var userId = deleteBtn.parent().parent().parent().attr('id');
		console.log(deleteBtn.parent().parent().parent());
		userService.deleteUser(userId).then(findAllUsers);
	}

	function selectUser() {
		var editBtn = $(event.currentTarget);
		var userId = editBtn.parent().parent().parent().attr('id');
		selectedId = userId;
		console.log(selectedId);
		findUserById(userId);
	}

	function updateUser() {
		$usernameFld = $('#usernameFld').val();
		$passwordFld = $('#passwordFld').val();
		$firstNameFld = $('#firstNameFld').val();
		$lastNameFld = $('#lastNameFld').val();
		var role = $('#roleFld').val();
		var userId = selectedId;
		console.log(selectedId);
		console.log(userId);

		var user = {
			"username" : $usernameFld,
			"password" : $passwordFld,
			"firstName" : $firstNameFld,
			"lastName" : $lastNameFld,
			"role" : role
		};
		console.log(user);
		userService.updateUser(userId, user).then(findAllUsers);
	}

	function renderUser(user) {
		$('#usernameFld').val(user.username);
		$('#passwordFld').val(user.password);
		$('#firstNameFld').val(user.firstName);
		$('#lastNameFld').val(user.lastName);
		$('#roleFld').val(user.role);
	}

	function renderUsers(users) {
		tbody.empty();
		for (var i = 0; i < users.length; i++) {
			var user = users[i];
			var clone = template.clone();

			clone.attr('id', user.id);

			clone.find('#wbdv-remove').click(deleteUser);
			clone.find('#wbdv-edit').click(selectUser);

			clone.find('.wbdv-username').html(user.username);
			clone.find('.wbdv-first-name').html(user.firstName);
			clone.find('.wbdv-last-name').html(user.lastName);
			clone.find('.wbdv-role').html(user.role);

			tbody.append(clone);
		}
	}

})();
