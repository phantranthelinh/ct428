function formValidate(){
	var u = document.getElementById('user').value;
	if(u==""){
		alert("Vui lòng nhập username");
		return false;
	}
	var p = document.getElementById('pwd').value;
	if(p==""){
		alert("Vui lòng nhập password");
		return false;
	}

	var pa= document.getElementById('pwda').value;
	if(pa==""){
		alert("Vui lòng nhập nhập lại mật khẩu");
		return false;
	}

	var fn= document.getElementById('fname').value;
	if(fn==""){
		alert("Vui lòng nhập First name");
		return false;
	}

	var ln= document.getElementById('lname').value;
	if(ln==""){
		alert("Vui lòng nhập lname");
		return false;
	}
	var e= document.getElementById('email').value;
	if(e==""){
		alert("Vui lòng nhập lname");
		return false;
	}
	var sdt=document.getElementById('phone').value;
	if(sdt==""){
		alert("Vui lòng nhập sdt");
		return false;
	}
	return true;
}
function password() {
    var fpw = document.getElementById("pwd").value;
    var spw = document.getElementById("pwda").value;
 
    if (fpw!=spw) {
    	alert("Mật khẩu nhập lại chưa khớp")
    	return false;
       }