function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}



function FillAddress(f) {
	if (f.copy.checked == true) {
		f.caddress.value = f.paddress.value;

	}
}


// left header drop down
function validate_form() {
	if (validate_main()) {
		return addlist();
	}
}


function validate_main() {
	if (validate_email() && validate_phone() && validate_password()) {
		return true;
	}
	return false;
}

//for email validation
function validate_email() {
	if (!(/^([\w+_.?-])+@([\w+_.-])+\.([a-zA-Z])+([a-zA-Z])+/).test(document.form.email.value)) {
		alert("Enter a Valid Email !");
		return (false);
	}
	return true;
}

function validate_phone() {
	var num = document.form.phone.value;
	// for number validation
	if (num.length != 10) {
		alert("Invalid phone Number, Enter 10 digits!");
		return false;
	}
	if (isNaN(num) || num.indexOf(" ") != -1) {
		alert("Enter numeric value")
		return false;
	}
	return true;
}
//for password validation
// if (document.form.pwd1.value != "" && document.form.pwd1.value == document.form.pwd2.value) {
// 	if (!checkPassword(form.pwd1.value)) {
// 		alert("The password you have entered is not valid!");
// 		form.pwd1.focus();
// 		return false;
// 	}
// } else {
// 	alert("Error: Please check that you've entered and confirmed your password!");
// 	form.pwd1.focus();
// 	return false;
// }
// return true;
function validate_password() {
	var passw = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
	if (document.form.pswd1.value.match(passw)) {
		if (document.form.pswd1.value != document.form.pswd2.value) {
			alert("Password and Confirm Password should match")
			document.form.pswd2.focus;
			return false;
		}
		return true;
	} else {
		alert('password must contain at least one numeric digit, one uppercase,one special character and one lowercase letter!')
		document.form.pswd1.focus;
		return false;
	}
	return true;

}

function addlist() {
	// for dashboard append list

	var lit = document.createElement("li");
	var text = document.getElementById("name").value;
	lit.innerHTML = text;
	var mail = document.getElementById("email").value;
	lit.setAttribute('title', mail);
	document.getElementById("list").appendChild(lit);
}