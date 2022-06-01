function UserInFo() {
	
	this.clear = function() {
		plus.storage.removeItem("name");
		plus.storage.removeItem("passwd");
		plus.storage.removeItem("token");
	}

	this.has_login = function() {
		var name = UserInFo.name;
		var passwd = UserInFo.passwd;
		var token = UserInFo.token;
		if(name & passwd & token) {
			return true;
		} else {
			return false;
		}
	}

	this.name = function() {
		return plus.storage.getItem("name");
	}

	this.passwd = function() {
		return plus.storage.getItem("passwd");
	}

	this.token = function() {
		return plus.storage.getItem("token");
	}

}