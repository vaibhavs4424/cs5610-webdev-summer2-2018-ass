(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn;
    var $firstNameFld, $lastNameFld;
    var template, tbody;
    var userService = new AdminUserServiceClient();
    $(main);

    function main() {


        tbody = $('tbody');
        template = $('.template');
        $('#createUser').click(createUser);

        findAllUsers();
    }
    function createUser() {
        $usernameFld = $('#usernameFld').val();
        $passwordFld = $('#passwordFld').val();
        $firstNameFld = $('#firstNameFld').val();
        $lastNameFld = $('#lastNameFld').val();

        var user = {
            "username": $usernameFld,
            "password": $passwordFld,
            "firstName": $firstNameFld,
            "lastName": $lastNameFld
        };

        userService
            .createUser(user)
            .then(findAllUsers);
    }
    function findAllUsers() {
        userService
            .findAllUsers()
            .then(renderUsers);
    }
    function findUserById() {  }
    function deleteUser() {
        var deleteBtn = $(event.currentTarget);
        console.log(deleteBtn);
        var userId = deleteBtn
            .parent()
            .parent()
            .parent()
            .attr('id');
        console.log(deleteBtn.parent().parent().parent());
        userService
            .deleteUser(userId)
            .then(findAllUsers);
    }
    function selectUser() {  }

    function updateUser(user) {
        var editBtn = $(event.currentTarget);
        var userId = editBtn
            .parent()
            .parent()
            .parent()
            .attr('id');

        userService
            .updateUser(userId,user)
            .then(findAllUsers);
    }


    function renderUser(user) {

    }

    function renderUsers(users) {
        tbody.empty();
        for(var i=0; i<users.length; i++) {
            var user = users[i];
            var clone = template.clone();

            clone.attr('id', user.id);

            clone.find('#wbdv-remove').click(deleteUser);
            clone.find('#wbdv-edit').click(updateUser);

            clone.find('.wbdv-username')
                .html(user.username);
            tbody.append(clone);
        }
    }
    

    
})();
