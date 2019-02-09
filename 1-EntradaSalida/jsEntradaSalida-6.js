/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//var primerNumero;
	//var segundoNumero;
	var numeroUno;
	var numeroDos;
	var suma;// se agrega solo cuando se hace con document.g...

	//primerNumero= numeroUno.value;
	//segundoNumero= numeroDos.value;

	numeroUno = document.getElementById('numeroUno').value;
	numeroDos = document.getElementById('numeroDos').value;
	
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	alert("la suma es: " + suma);


	//alert(primerNumero + segundoNumero);
}

