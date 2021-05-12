function funcion(){
	var sal=Number(document.getElementById('sal').value);
	var dia=Number(document.getElementById('dia').value);
	//salario diario
	var sd = sal/30;
	var sd2 = sd.toFixed(2);
	document.getElementById('sd').value=sd2;
	//prima vacacional
	var pv = sd * dia * 0.25 /365;
	var pv2 = pv.toFixed(2);
	document.getElementById('pv').value=pv2;
	//salario diario integrado
	var a = sd * 15 / 365;
	var sdi = a + pv + sd;
	var sdi2 = sdi.toFixed(2);
	document.getElementById('sdi').value=sdi2;
	//salario mensual integrado
	var smi = sdi*30;
	var smi2 = smi.toFixed(2);
	document.getElementById('smi').value=smi2;
	//salario de 3 meses
	var s3m = smi*3;
	var s3m2 = s3m.toFixed(2);
	document.getElementById('s3m').value=s3m2;
	//salario 20 dias por año
	var p = sdi * 20;
	var q = (sdi * 20 / 360) * 300;
	var s2a = p + q;
	var s2a2 = s2a.toFixed(2);
	document.getElementById('s2a').value=s2a2;
	// prima de antiguedad
	var x = sdi * 12;
	var y = sdi * 10;
	var pa = x + y;
	var pa2 = pa.toFixed(2);
	document.getElementById('pa').value=pa2;
	//Liquidacion
	var liq = s3m + s2a + pa;
	var liq2 = liq.toFixed(2);
	document.getElementById('liq').value=liq2;
}

function reset(){
	document.getElementById('sd').value="";
	document.getElementById('pv').value="";
	document.getElementById('sdi').value="";
	document.getElementById('smi').value="";
	document.getElementById('s3m').value="";
	document.getElementById('s2a').value="";
	document.getElementById('pa').value="";
	document.getElementById('liq').value="";
}