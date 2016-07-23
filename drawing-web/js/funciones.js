window.onload=inicio;
function inicio() {
	dibujarCanvas();
	drawW={
		color: "#000",
		forma: {
			estado: false,
			circuloR: 1,
			rectangulo: [4,4,1,5],
			tipo: "lineas", //lineas,circulos
			posicionAnX: 0,
			posicionAnY: 0
		},
		borrador: {
			estado: false,
			tam: 20
		},
		posicionX: 10,
		posicionY: 10
	};
	codWD = {
		cod: "",
		canvas: false,
		linesC: [],
		posCa: "center"
	};
	letters = {
		esp: ["objeto","fondoColor"],
		eng: ["this", "fillStyle"]
	};
	if(document.getElementById('campoDraw')){
		drawW.forma.circuloR = document.getElementById('tamVal').value;
		dubujoCamenzar();
		window.onresize=Tamanio;
		var colorC=document.getElementById('col');
		var tamV=document.getElementById('tamVal');
		colorC.addEventListener("change",cargarCol,false);
		tamV.addEventListener("change",cargarTamanio,false);
	}
	if(localStorage.getItem("userDrag")){
		var usuarioAd=localStorage.getItem("userDrag").split(':');
		if(usuarioAd[0]=="snd" && document.getElementById('holaDrag')){
			document.getElementById('holaDrag').innerHTML='<li id="cerrarSecion" title="cerrar cesion" onclick="closeSession()"></li><li id="adminA" onclick="ingresarSaUser(\'administrador\')"></li><li id="img" onclick="ingresarSaUser(\'edit\')"></li><li id="user">user</li><div class="clear"></div>';
			cargarDatImagenUser();
		}
		else if(document.getElementById('holaDrag') && usuarioAd[0]!="snd"){
			document.getElementById('holaDrag').innerHTML='<li id="cerrarSecion" title="cerrar cesion" onclick="closeSession()"></li><li id="img" onclick="ingresarSaUser(\'edit\')"></li><li id="user">user</li><div class="clear"></div>';
			cargarDatImagenUser();
		}
	}else{
		if(document.getElementById('holaDrag')){
			document.getElementById('holaDrag').innerHTML='<li id="logeo" onclick="ingresarSaUser(\'logeo\')" title="logearse"></li><li id="nuevoU" onclick="ingresarSaUser(\'registro\')" title="registrar usuario"></li>';
		}
	}
	//////////////////////////////
	window.onresize = function(){
		calcTamPanel();
		Tamanio();
	};
	//////////////////////////////
}
function dibujarCanvas(){
	var canvas=document.createElement('canvas');
	if(document.getElementById('canvasImprim')){
		var campo=document.getElementById('canvasImprim');
		canvas.id="dibujito";
		campo.appendChild(canvas);
	}
}
function dubujoCamenzar(){
	canvas=document.getElementById("dibujito");
	Tamanio();
	if(canvas.getContext){
		contexto=canvas.getContext("2d");
		contexto.fillStyle="#eee";
		contexto.fillRect(0,0,canvas.width,canvas.height);
		document.getElementById('color').style.background=drawW.color;
	}else{
		alert("Disculpe por las molestias, pero no puedes dibujar, necesitas el navegador actualizado");
	}
	eventos();
}
function dibujarOb(e){
	if(drawW.borrador.estado){
		if(document.getElementById('eracerFun')){
			var nodo=document.getElementById('eracerFun');
			drawW.posicionX=e.layerX-10;
			drawW.posicionY=e.layerY-5;
			nodo.style.left=drawW.posicionX+"px";
			nodo.style.top=drawW.posicionY+"px";
			contexto.fillStyle="#eee";
			contexto.fillRect(drawW.posicionX-10,drawW.posicionY,drawW.borrador.tam,drawW.borrador.tam);
		}
	}else{
		switch(drawW.forma.tipo){
			case "lineas": dibujoConLines(e); break;
			case "circulos": dibujoConCircles(e);break;
		}
	}
}
function dibujoConLines(e){
	if(drawW.forma.estado){
		contexto.beginPath();
		contexto.strokeStyle = drawW.color;
		contexto.lineWidth = drawW.forma.circuloR;
		contexto.lineJoin = 'round';
		contexto.moveTo(drawW.forma.posicionAnX, drawW.forma.posicionAnY);
		contexto.lineTo((e.layerX)*1 - 8, (e.layerY)*1);
		contexto.closePath();
		contexto.stroke();
		drawW.forma.posicionAnX=(e.layerX)*1 - 8;
		drawW.forma.posicionAnY=(e.layerY)*1;
	}else{
		drawW.forma.posicionAnX=e.layerX;
		drawW.forma.posicionAnY=e.layerY;
		drawW.forma.estado=true;
	}
}
function dibujoConCircles(e){
	contexto.beginPath();
	contexto.fillStyle = drawW.color;
	drawW.posicionX=e.layerX-10;
	drawW.posicionY=e.layerY-5;
	var _radio = 1 + Math.ceil(Math.random() * drawW.forma.circuloR);
	var _posX = 1 + Math.ceil(Math.random() * drawW.forma.circuloR);
	var _posY = 1 + Math.ceil(Math.random() * drawW.forma.circuloR);
	contexto.arc(drawW.posicionX + _posX, drawW.posicionY + _posY, _radio, 0, Math.PI * 2);
	contexto.fill();
	contexto.beginPath();
	_radio = 1 + Math.ceil(Math.random() * drawW.forma.circuloR);
	_posX = 1 + Math.ceil(Math.random() * drawW.forma.circuloR);
	_posY = 1 + Math.ceil(Math.random() * drawW.forma.circuloR)
	contexto.arc(drawW.posicionX + _posX, drawW.posicionY + _posY, _radio, 0, Math.PI * 2);
	contexto.fill();
	contexto.beginPath();
	_radio = 1 + Math.ceil(Math.random() * drawW.forma.circuloR);
	_posX = 1 + Math.ceil(Math.random() * drawW.forma.circuloR);
	_posY = 1 + Math.ceil(Math.random() * drawW.forma.circuloR)
	contexto.arc(drawW.posicionX + _posX, drawW.posicionY + _posY, _radio, 0, Math.PI * 2);
	contexto.fill();
	contexto.beginPath();
	_radio = 1 + Math.ceil(Math.random() * drawW.forma.circuloR);
	_posX = 1 + Math.ceil(Math.random() * drawW.forma.circuloR);
	_posY = 1 + Math.ceil(Math.random() * drawW.forma.circuloR)
	contexto.arc(drawW.posicionX + _posX, drawW.posicionY + _posY, _radio, 0, Math.PI * 2);
	contexto.fill();
}
function eventos(){
	canvas.addEventListener("mousedown", clickMouse);
}
function clickMouse(e){
	canvas.addEventListener("mousemove", moverMouse);
	document.addEventListener("mouseup", elimEv);
}
function moverMouse(e){
	dibujarOb(e);
}
function elimEv(){
	canvas.removeEventListener("mousemove", moverMouse);
	drawW.forma.estado=false;
}
function Tamanio(){
	var mat=document.getElementById('materiales');
	var can=document.getElementById('canvasImprim');
	var bE=document.getElementById('barraHerramientas');
	var CampoDibujo=document.getElementById('campoDraw');
	var tamHe=CampoDibujo.offsetHeight - bE.offsetHeight-20;
	canvas.width=CampoDibujo.offsetWidth-mat.offsetWidth-30;
	can.style.width=(CampoDibujo.offsetWidth-mat.offsetWidth-24)+"px";
	if (tamHe>=450){
		canvas.height=CampoDibujo.offsetHeight - bE.offsetHeight-20;
	}else{
		canvas.height=450;
	}
}
function cargarCol(){
	var etiquetaCol=document.getElementById('color');
	drawW.color=this.value;
	etiquetaCol.style.background=drawW.color;
	coloreschange(drawW.color);
}
function cargarTamanio(){
	drawW.forma.circuloR=this.value;
	if(drawW.borrador.estado){
		drawW.borrador.tam=Math.round(this.value*1)+20;
		var nodo=document.getElementById('eracerFun');
		nodo.style.height=drawW.borrador.tam+"px";
		nodo.style.width=drawW.borrador.tam+"px";
	}
}
function newCanvasL(){
	canvas.width=canvas.width;
	canvas.height=canvas.height;
	contexto.fillStyle="#eee";
	contexto.fillRect(0,0,canvas.width,canvas.height);
	document.getElementById('color').style.background=drawW.color;
}
function borradorC(){
	if(drawW.borrador.estado){
		crearBorrador();
	}else{
		drawW.borrador.estado=true;
		crearBorrador();
	}
}
function crearBorrador(){
	if(document.getElementById('eracerFun')){
		var nodo=document.getElementById('eracerFun');
		nodo.remove();
	}
	var tag=document.createElement("div");
	var cont=document.getElementById('canvasImprim');
	tag.id="eracerFun";
	tag.style.width=drawW.borrador.tam+"px";
	tag.style.height=drawW.borrador.tam+"px";
	cont.appendChild(tag);
	console.log(drawW.borrador.tam);
}
function cursorC(){
	drawW.borrador.estado=false;
	if(document.getElementById('eracerFun')){
		var nodo=document.getElementById('eracerFun');
		nodo.remove();
	}
}
function lapizC(){
	drawW.borrador.estado=false;
	var formG='<div id="opcionesLapiz"><li id="circuloSe" onclick="opcionesLapiz(\'circulos\')"></li><li id="lineSe" onclick="opcionesLapiz(\'lineas\')"></li></div>';
	var tag=document.getElementById('flotante');
	tag.innerHTML=formG;
	flotante('show');
}
/*****************************/
function showpanel(){
	if(document.getElementsByClassName("codigoPanel")[0]) return;
	var doc = document.getElementById("campoDraw");
	var div = document.createElement("div");
	var btn = document.createElement("div");
	var btnC = document.createElement("div");
	var btnP = document.createElement("div");
	var areaCod = document.createElement("div");
	var Cod = document.createElement("pre");
	var btnHelp = document.createElement("div");
	var btnClose = document.createElement("div");
	var btnPosL = document.createElement("div");
	var menuNumber = document.createElement("div");
	var textA = document.createElement("input");
	//////////////////////////////////////
	var hiddenCod = document.getElementById("hiddenCod");
	//////////////////////////////////////

	btn.className = "btnS";
	btnClose.className = "btn_close";
	btnHelp.className = "btn_help";
	btnC.className = "btn_clear";
	btnP.className = "btn_preview";
	btnPosL.className = "btn_posLe";
	div.className = "codigoPanel";
	areaCod.className = "areaCodigo";
	menuNumber.className = "menuNumber";
	textA.className = "textA";
	textA.type = "text";
	textA.value = "";
	textA.onFocus = true;

	/*codigo area*/
	Cod.contentEditable = "true";
	Cod.style.background = "rgb(238, 238, 238)";
	Cod.style.paddingLeft = "7px";
	Cod.style.overflow = "scroll";
	Cod.id = "jsCode";
	Cod.spellcheck = "false";
	Cod.innerHTML = hiddenCod.innerHTML;
	/*fin codigo area*/
	menuNumber.innerHTML="<li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>5</li><li>7</li>";
	btnClose.addEventListener("click",hiddenPan,false);
	btnP.addEventListener("click",previewCod,false);
	btnC.addEventListener("click",clearArea,false);
	//areaCod.addEventListener("keyup",drawC,false);
	textA.addEventListener("keyup",drawC,false);
	btnPosL.addEventListener("click",panelPo,false);

	//areaCod.appendChild(textA);
	areaCod.appendChild(Cod);
	btn.appendChild(btnP);
	btn.appendChild(btnC);
	btn.appendChild(btnHelp);
	btn.appendChild(btnClose);
	btn.appendChild(btnPosL);
	div.appendChild(btn);
	div.appendChild(areaCod);
	doc.appendChild(div);
	div.appendChild(menuNumber);
	calcTamPanel();
	showPanelS();
	/******/
	codWD.canvas = startCanvas();
	drawRect(codWD.canvas, 20, 20, 50, 50, [true, "#f00"], [true, "#00f", 19, 19, 52, 52]);
}
function startCanvas(){
	var cnvs = canvas;
	if(cnvs.getContext) return cnvs.getContext("2d");
}
function calcTamPanel(){
	var tamD = document.documentElement.offsetWidth;
	var tamPa = document.getElementsByClassName("codigoPanel")[0];
	if(!tamPa) return;
	var ntam = ((tamD - tamPa.offsetWidth) / 2) + "px";
	tamPa.style.left = ntam;
}
function drawC(e){
	console.log(e.key);
	if(e.key == "Enter") writeLinC(document.getElementsByClassName("areaCodigo")[0]);
	if(e.key == "Backspace"){
		var n = codWD.cod.length;
		var te = codWD.cod;
		codWD.cod = "";
		for(i=0;i<n-1;i++){
			codWD.cod = codWD.cod + te[i];
		}
		return;
	}
	codWD.cod = codWD.cod + "" + e.key;
	//console.log(codWD.cod);
	if(document.getElementsByClassName("codigoPanel")[0].innerHTML == "") codWD.cod="";
}
function previewCod(){
	var cod = document.getElementsByClassName("areaCodigo")[0].innerHTML;
	console.log(cod);
}
function clearArea(){
	document.getElementsByClassName("areaCodigo")[0].innerHTML = "";
}
function hiddenPan(){
	var tamPa = document.getElementsByClassName("codigoPanel")[0];
	tamPa.className = "codigoPanel hidennP";
	window.setTimeout(function(){
		tamPa.remove();
	},1000);
}
function showPanelS(){
	var tamPa = document.getElementsByClassName("codigoPanel")[0];
	tamPa.className = "codigoPanel showPs";
}
function drawRect(_canvas, _posx, _posy, _anch, _alto, Fondo, Borde){
	var color = "#f0f";
	var rectF = false;
	var rectB = false;
	var rectBF = false;
	var extra = false;
	if((Fondo.length>0 && Borde.length>0) || (Fondo & Borde)){
		if(Fondo[0] && Borde[0]) rectBF = true;
		else if(Fondo & Borde) rectBF = true;
		else extra = true;
		//if(Fondo[0]) color = "red";
	}
	else{
		if(Fondo[0] || Fondo) rectF = true;
		else if(Borde[0] || Borde) rectB = true;
		else extra = true;
	}
	/*************************/
	if(rectBF){
		_canvas.fillStyle = Fondo[1];
		_canvas.strokeStyle = Borde[1];
		_canvas.strokeRect(Borde[2], Borde[3], Borde[4], Borde[5]);
		_canvas.fillRect(_posx, _posy, _anch, _alto);
	}
	else if(rectF){
		_canvas.fillStyle = Fondo[1];
		_canvas.fillRect(_posx, _posy, _anch, _alto);
	}
	else if(rectB){
		_canvas.strokeStyle = Borde[1];
		_canvas.strokeRect(Borde[2], Borde[3], Borde[4], Borde[5]);
	}
	else if(extra){
		_canvas.fillStyle = Fondo[1];
		_canvas.fillRect(_posx, _posy, _anch, _alto);
	}
}
/*****************************/
function opcionesLapiz(opcion){
	drawW.forma.tipo=opcion;
	document.getElementById('opcionesLapiz').style.background.opacity=0;
	flotante('hidden');
	setTimeout(function(){
		limpiarFlotante();
	},1000);
}
function flotante(opcion){
	document.getElementById('flotante').className=opcion;
}
function rutaAvance(ruta){
	console.log(ruta);
}
function coloreschange(color){
	var cont=document.getElementById('colores');
	var lista=false;
	var tag=false;
	if(document.getElementsByClassName('color')){
		lista=document.getElementsByClassName('color');
	}
	if(document.getElementById(color)){
		document.getElementById(color).remove();
	}
	if(lista.length<30 && lista){
		//<li onclick="" id="#ffff" class="color"></li>
		tag=document.createElement('li');
		tag.style.background=color;
		tag.onclick=function(e){
			drawW.color=e.originalTarget.id;
		};
		tag.id=color;
		tag.className="color";
		cont.appendChild(tag);
	}else{
		if(!lista){
			//<li onclick="" id="#ffff" class="color"></li>
			tag=document.createElement('li');
			tag.style.background=color;
			tag.onclick=function(e){
				drawW.color=e.originalTarget.id;
			};
			tag.id=color;
			tag.className="color";
			cont.appendChild(tag);
		}
		else if(lista.length==30){
			var variable=Math.round(Math.random()*29);
			lista[variable].style.background=color;
			lista.onclick=function(e){
				drawW.color=e.originalTarget.id;
			};
		}
	}
}
function guardarTrab(){
	var data = canvas.toDataURL('image/png');
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
		if(localStorage.getItem("userDrag")){
			var arregloDatos=localStorage.getItem("userDrag").split(':');
			Cargar('php/saveImage.php?typeIm=cargaDB&nombreUs='+arregloDatos[0]+'&nombreImg='+xhr.responseText,'flotante');
			flotante('show');
			intervalo=setTimeout(function(){
				flotante('hidden');
				subIntervalo=setTimeout(function(){
					document.getElementById('flotante').innerHTML="";
					clearInterval(subIntervalo);
				},500);
				clearInterval(intervalo);
			},1500);
		}
	  }
	}
	xhr.open('POST','php/saveImage.php',true);
	xhr.setRequestHeader('Content-Type', 'application/upload');
	xhr.send(data);
}
function mostrarImagen(e){
	var urlI=e.src;
	var im=document.createElement('img');
	var nodo=document.createElement('div');
	nodo.id="ventanaImG";
	im.src=urlI;
	im.onclick=hiddenImagen;
	im.id="imagenShow";
	document.getElementById('flotante').appendChild(nodo);
	nodo.appendChild(im);
	console.log(nodo);
	flotante('show');
}
function hiddenImagen(){
	flotante('hidden');
	window.setTimeout(function(){
		document.getElementById('flotante').innerHTML="";
	},1000);
}
function openFolder(){}
function verTrab(){
	var lienzo=document.getElementById('dibujito');
	var data = lienzo.toDataURL('image/png');
	var xhr = new XMLHttpRequest();
	window.open(data,'_blank');
	//console.log(data);
}
function logeo(){
	var usuarioL=document.getElementById('usuario').value;
	var contrasena=document.getElementById('contrasena').value;
	logeoWait('php/ingresar.php?tipo=logeo&usuario=' + usuarioL + '&contrasena=' + contrasena,'campoRPTA');
}
function logeoWait(pagina, campo){
	var ajax=new XMLHttpRequest();
	ajax.open('POST',pagina,true);
	ajax.onreadystatechange=function(){
		if(ajax.readyState<4){
			document.getElementById('loadF').innerHTML='<div id="circleLoad"></div>';
			document.getElementById('loadF').className="show";
		}
		if(ajax.readyState==4){
			if(ajax.responseText=="usuarioEncontrado"){
				document.getElementById(campo).innerHTML="<a id='entrarYa' href='php/../'></a>";
			}
			validarLog(ajax.responseText);
		}
	}
	ajax.send(null);
}
function validarLog(respuesta){
	if(respuesta=="usuarioEncontrado"){
		userSelect();
	}else{
		document.getElementById('loadF').innerHTML='<div id="respuestaL" onclick="ingresarSaUser(\'logeo\')">' + respuesta + "</div>";
	}
}