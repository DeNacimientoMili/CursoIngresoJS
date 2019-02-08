/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var ingreseSueldo;
	var mostrarAumento;

	ingreseSueldo=sueldo.value;
	
	ingreseSueldo=parseInt(ingreseSueldo);
    
    mostrarAumento=(ingreseSueldo * 0.10);
    
    resultado.value = mostrarAumento
}
