//This function checks if the email is valid (it contains exactly one
// @ symbol that comes before exactly one .) Will need to implement a checker
//to make sure the email address is a valid address.
function check_email (email) {
	var dot_count = 0;
	for(var i = 0; i < email.length; i ++){
		if(email[i] == ".") dot_count ++;
	}
	if (dot_count != 1) return "Incorrect amount of .'s.";

	var local = email.split(".")[0];

	at_count = 0;
	for(var i = 0; i < local.length; i ++){
		if (local[i] == '@') at_count ++;
	}
	if (at_count != 1) return "Incorrect amount of @ signs.";

	var 

	return "Allgood";
}

exports.check_email_ = (email) => check_email(email);

