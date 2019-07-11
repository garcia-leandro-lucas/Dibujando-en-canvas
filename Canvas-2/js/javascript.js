var color = "#000000";
	var tamano = 10;
	var pintura = false;
	function pintar(event){
		var canvas = document.getElementById("canvas");
		var lienzo = canvas.getContext("2d");
		var x = event.clientX-10;
		var y = event.clientY+15;
		if(pintura){
			lienzo.fillStyle = color;
			lienzo.fillRect(x,y,tamano, tamano);
			lienzo.lineJoin = 'round';
			lienzo.lineCap = 'round';
		}
	}

	//canvas.width = window.innerWidth;
	//canvas.height = window.innerHeight;


	function activar(){
		pintura = true;
	}
	function desactivar(){
		pintura = false;
	}
	
	function borrador(){
		document.getElementById("canvas").style.cursor = "url('borradorcursor.png'), default";
		color = "#FFFFFF";
		document.getElementById("colores").setAttribute("disabled", "");
	}
	
	function lapiz(){
		document.getElementById("canvas").style.cursor = "url('lapizcursor.gif'), default";
		color = document.getElementById("colores").value;
		document.getElementById("colores").removeAttribute("disabled");
	}
	function scolor(){
		color = document.getElementById("colores").value;
	}
	function stamano(numero) {
		tamano = numero;
	}
	
	function guardari(){
		var canvas = document.getElementById("#canvas");
		var imagen = canvas.toDataURL("image/png");
		this.href = imagen;
	}