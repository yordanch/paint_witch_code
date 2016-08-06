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
	drawSnd.DrawSnd = DrawSnd;
})(window);
var startC = new DrawSnd();