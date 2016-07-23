function codE(){

}
function writeLinC(area){
	_area = area;
	if(_area.childNodes.length>0){
		for(i=0; i<_area.childNodes.length;i++){
			if(_area.childNodes[i].tagName == "BR" || _area.childNodes[i].tagName == "br") _area.childNodes[i].remove();
		}
	}
	if(codWD.linesC.length>0){
		var li = document.createElement("li");
		_area.appendChild(li);
	}else{
		var li = document.createElement("li");
		_area.appendChild(li);
	}
	if(_area.childNodes.length>0){
		area.innerHTML = "";
		var textA = document.createElement("input");
		textA.type = "text";
		textA.value = "";
		textA.onFocus = true;

		for(j=0; j<_area.childNodes.length;j++){
			area.appendChild(_area.childNodes[j]);
		}
		area.appendChild(textA);
	}
	//codWD.linesC.push();letters
}
function anCod(){
	
}
function panelPo(){
	var panelPoA = document.getElementsByClassName("codigoPanel")[0];
	var btnPosLe = document.getElementsByClassName("btn_posLe")[0];
	if(!panelPoA || !btnPosLe) return;
	switch(codWD.posCa){
		case "center":
			panelPoA.style = "";
			panelPoA.id = "codigoPanelLeft";
			btnPosLe.style.backgroundImage = "url('imagenes/logos/center.png')";
			console.log(panelPoA);
			codWD.posCa = "left";
			break;
		case "left":
			panelPoA.id = "";
			btnPosLe.style.backgroundImage = "url('imagenes/logos/left.png')";
			console.log(panelPoA);
			calcTamPanel();
			codWD.posCa = "center";
			break;
	}
}