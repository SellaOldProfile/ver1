
x = [69,76,65,83,84,73,67,66,69,65,78,83,84,65,76,75]
function a2t(e){
	var res ="";
	for (var i=0; i<x.length; i++){
		var val = x[i];
		var c = String.fromCharCode(val)
		document.writeln("val : "+val+" --> "+c+"\n");
		res += c;
	}
	document.writeln("final res is "+res);
}
a2t(x);