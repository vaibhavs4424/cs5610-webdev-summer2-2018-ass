(function () {
    var $usernameFld, $passwordFld;
    var $loginBtn;
    var userService = new AdminUserServiceClient();
    $(main);

    function main() {
        $usernameFld =$("#username");
        $passwordFld=$("#password");
        $loginBtn = $("#signinBtn");

        $("#signinBtn").click(login);
    }
    function login() {
        var user = {
            username: $usernameFld.val(),
            password: $passwordFld.val()
        }

        userService
            .login(user)
            .then(loggedIn);
    }

    function loggedIn(response) {
      console.log(response);
       if(response.status==422)
         alert('Invalid credentials!');
      else if(response.status==200)
         window.location.href="profile.template.client.html";
    }
})();
