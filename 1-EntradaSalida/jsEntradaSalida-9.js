/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//var ingreseSueldo;
	//var mostrarAumento;
	var sueldo;
	var sueldoConAumento;
	var aumento;

	//ingreseSueldo=sueldo.value;
	sueldo = document.getElementById('sueldo').value;
	
	//ingreseSueldo=parseInt(ingreseSueldo);
	sueldo = parseInt(sueldo);
    
    //mostrarAumento=(ingreseSueldo * 0.10);
    aumento = (sueldo * 0.10);
    
    //resultado.value = mostrarAumento
    sueldoConAumento = sueldo + aumento;

    document.getElementById('resultado').value=sueldoConAumento;

//comentario


}
