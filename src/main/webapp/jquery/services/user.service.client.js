function AdminUserServiceClient() {
	this.createUser = createUser;
	this.findAllUsers = findAllUsers;
	this.deleteUser = deleteUser;
	this.findUserById = findUserById;
	this.updateUser = updateUser;
	this.login=login;
	this.profile=profile;
	this.updateProfile = updateProfile;
	this.logout=logout;
	this.url = 'http://localhost:8080/api/user';
	this.loging = 'http://localhost:8080/api/login';
	this.profileUrl = 'http://localhost:8080/api/profile';
	this.logoutUrl='http://localhost:8080/api/logout';
	var self = this;


	function updateProfile(user) {
        return fetch(self.profileUrl, {
            method : 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',

            },
            credentials: "same-origin"
        }).then(function (response) {
            if(response.bodyUsed){
                return response.json();
            }

            return null;

        });
    }


    function logout() {
        return fetch(self.logoutUrl, {
            method : 'post',
            headers: {
                'content-type': 'application/json'
            },
            credentials: "same-origin"
        });

    }

    function login(user) {
		return fetch(self.loging, {
			method : 'post',
			body : JSON.stringify(user),
			headers : {
				'content-type' : 'application/json'
			},
            credentials: "same-origin"
		});
	}
	
	function profile() {
        return fetch(self.profileUrl,{
            method: 'get',
            credentials: "same-origin"
        }).then(function (response) {
            return response.json();
        });
    }

	function updateUser(userId, user) {
        return fetch(self.url+'/'+userId, {
            method : 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "same-origin"
        }).then(function (response) {
            if(response.bodyUsed){
                return response.json();
            }

            return null;

        });

    }

	function findUserById(userId) {
		return fetch(self.url + '/' + userId).then(function(response) {
			return response.json();
		});
	}

	function deleteUser(userId) {
		return fetch(self.url + '/' + userId, {
			method : 'delete'
		});
	}

	function findAllUsers() {
		return fetch(self.url).then(function(response) {
			return response.json();
		});
	}

	function createUser(user) {
		return fetch(self.url, {
			method : 'post',
			body : JSON.stringify(user),
			headers : {
				'content-type' : 'application/json'
			}
		});
	}
}