(function () {
    var $usernameFld, $phoneFld,$emailFld,$roleFld,$dobFld;
    var $updateBtn , $logoutBtn;
    var userService = new AdminUserServiceClient();
    $(main);

    function main() {
        $usernameFld =$("#username");
        $phoneFld =$("#phone");
        $emailFld =$("#emailId");
        $roleFld =$("#role");
        $updateBtn =$("#updateBtn");
        $logoutBtn =$("#logoutBtn");
        $dobFld = $('#dob');
        userService.profile().then(setUserProfile);
        $updateBtn.click(updateProfile);
        $logoutBtn.click(logoutUser);

    }

    function setUserProfile(user) {
        $usernameFld.val(user.username);
        $phoneFld.val(user.phone);
        $emailFld.val(user.email);
        $dobFld.val(user.dob);
        $roleFld.val(user.role);
    }

    function updateProfile() {

        var user = {
            username: $usernameFld.val(),
            phone: $phoneFld.val(),
            role: $roleFld.val(),
            dateOfBirth: $dobFld.val(),
            email:$emailFld.val()
        }

        userService
            .updateProfile(user)
            .then(function (response) {
                alert('Profile Updated successful!');
            });
    }

    function logoutUser() {
        userService
            .logout().then(function (response) {
            window.location.href="login.template.client.html";
        })

    }

})();