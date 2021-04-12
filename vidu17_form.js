function binhchon(){
	danhsachchon.innerHTML= document.forms[0].hoten.value;
	for(i=0;i<document.forms[0].phai.length;i++){
		if(document.forms[0].phai[i].checked){
			danhsachchon.innerHTML+="("+document.forms[0].phai[i].value+")";
			break;
		}
	}
	danhsachchon.innerHTML += "<br>-TP yêu thích:";
	for(i=0;i<document.forms[0].cacdiadiem.length;i++){
		if(document.forms[0].cacdiadiem[i].checked)
			danhsachchon.innerHTML+=document.forms[0].cacdiadiem[i].value+ "|";

	}
	i=document.forms[0].thichnhat.selectedIndex;
	thichnhat= document.forms[0].thichnhat[i].value;

	danhsachchon.innerHTML += "<br>-" + "TP thích nhất:" + thichnhat;
}