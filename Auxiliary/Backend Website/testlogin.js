const checker = require('./login.js');

function test_check_email_(email, expected){
	return (expected == checker.check_email_("eiffer@rpi.edu"));
}

console.log(test_check_email_("eiffer.rpi.edu", "Allgood"));
console.log(test_check_email_("Danny_Gonzales@gmail.com", "Allgood"));
console.log(test_check_email_("testemail@generic.edu", "Allgood"));
console.log(test_check_email_("all@good.com", "Allgood"));