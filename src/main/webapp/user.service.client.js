function AdminUserServiceClient() {
	this.createUser = createUser;
	this.findAllUsers = findAllUsers;
	this.deleteUser = deleteUser;
	this.findUserById = findUserById;
	this.updateUser = updateUser;
	this.url = 'http://localhost:8080/api/user';
	this.login = 'http://localhost:8080/api/login';
	var self = this;

	function login(username, password) {
		return fetch(self.login, {
			method : 'post',
			body : JSON.stringify({
				username : username,
				password : password
			}),
			headers : {
				'content-type' : 'application/json'
			}
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