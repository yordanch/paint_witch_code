(function(drawSnd) {
	function DrawSnd() {
		this.startLienzo();
	}
	DrawSnd.prototype.startLienzo = function(){
		//iniciar aqui los objetos
		console.log("capturarCod");
	}
	DrawSnd.prototype.resizeW = function(){
		if(!lienzo.ctx) return;
		lienzo.area.width = lienzo.area.width;
		lienzo.area.height = lienzo.area.height;
		if(imgCanvas.objectI){
			this.drawImage();
		}
	}
	DrawSnd.prototype.drawImage = function(){
		if(imgCanvas.objectI.readyState == 2){
			var area = lienzo.ctx;
			var img = new Image();
			img.src = imgCanvas.objectI.result;
			imgCanvas.widIm = lienzo.area.width;
			imgCanvas.heiIm = lienzo.area.height;
			imgCanvas.posX = 0;
			imgCanvas.posY = 0;
			area.drawImage(img, imgCanvas.posX, imgCanvas.posY, imgCanvas.widIm, imgCanvas.heiIm);
		}
	}
	DrawSnd.prototype.drawRect = function(e){
		var _posX = e.layerX - 15;
		var _posY = e.layerY;
		var div = document.getElementById("canvasImprim");

		console.log(e.layerX + " Y: " + e.layerY);
		if(!lienzo.ctx){
			lienzo.ctx.fillStyle="red";
			lienzo.ctx.fillRect(e.layerX,e.layerY,drawRect.posXR,drawRect.posYR);
		}
		if(!document.getElementById("rectanguloD")){
			drawRect.objR.id = drawRect.objRId;
			div.appendChild(drawRect.objR);
			////////////////////////
			drawRect.posXR = _posX + lienzo.area.offsetLeft + 20;
			drawRect.posYR = _posY + lienzo.area.offsetTop;
			drawRect.anchoR = _nPosX - drawRect.posXR;
			drawRect.altoR = _posY + lienzo.area.offsetTop;
			drawRect.objR.style.left = drawRect.posXR + "px";
			drawRect.objR.style.top = drawRect.posYR + "px";
		}else{
			console.log(document.getElementById("rectanguloD"));
			var _nPosX = _posX + lienzo.area.offsetLeft + 20;
			var _nPosY = _posY + lienzo.area.offsetTop;
			drawRect.altoR = _nPosX - drawRect.posXR;
			drawRect.anchoR = _nPosY - drawRect.posYR;
			drawRect.objR.style.width = drawRect.anchoR + "px";
			drawRect.objR.style.height = drawRect.altoR + "px";
		}
	}
	DrawSnd.prototype.drawCircle = function(e){
		var _posX = e.layerX - 15;
		var _posY = e.layerY;
		var div = document.getElementById("canvasImprim");

		console.log(e.layerX + " Y: " + e.layerY);
		if(!lienzo.ctx){
			lienzo.ctx.fillStyle="red";
			lienzo.ctx.fillRect(e.layerX,e.layerY,drawCircle.posXC,drawCircle.posYC);
		}
		if(!document.getElementById("circuloD")){
			drawCircle.objC.id = drawCircle.objCId;
			div.appendChild(drawCircle.objC);
			////////////////////////
			drawCircle.posXC = _posX + lienzo.area.offsetLeft + 20;
			drawCircle.posYC = _posY + lienzo.area.offsetTop;
			drawCircle.anchoC = _nPosX - drawCircle.posXC;
			drawCircle.altoC = _posY + lienzo.area.offsetTop;
			drawCircle.objC.style.left = drawCircle.posXC + "px";
			drawCircle.objC.style.top = drawCircle.posYC + "px";
		}else{
			console.log(document.getElementById("rectanguloD"));
			var _nPosX = _posX + lienzo.area.offsetLeft + 20;
			var _nPosY = _posY + lienzo.area.offsetTop;
			drawCircle.altoC = _nPosX - drawCircle.posXC;
			drawCircle.anchoC = _nPosY - drawCircle.posYC;
			drawCircle.objC.style.width = drawCircle.anchoC + "px";
			drawCircle.objC.style.height = drawCircle.altoC + "px";
		}
	}
	drawSnd.DrawSnd = DrawSnd;
})(window);
var startC = new DrawSnd();