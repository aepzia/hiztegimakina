var table1;
var table2;
var table3;
var qrHautatua;
var pdfHautatua;

function hasi() {
//    alert("Kaixo!");
    var lehena = document.getElementById("gelaxka11");
    lehena.className="banderaAukeratua";
    //alert(lehena);
//    alert(lehena);
}

        var zenbagarrenOrria = 1;
//        var table, table2, table3;

        function hiztegiakJaso(){
            var i = 1;
            var request = new XMLHttpRequest();
            request.open("GET", "data.xml", false);
            request.send();
            table1 = "<table id='taula1'><tr>"
            table2 = "<table id='taula2'><tr>"
            table3 = "<table id='taula3'><tr>"
            var xml = request.responseXML;
            var hiztegiak = xml.getElementsByTagName("hiztegia");

	      var y=1;
	      var x=1;
	      
	      
		for(i=1; i <= 20; i++) {
			var hizt = hiztegiak[i-1];
            var proba = hizt.getElementsByTagName("izenaEuskaraz");
			var irudiTestua= hizt.getElementsByTagName("izenaNatiboan")[0].firstChild.data;
			var izenaEuskaraz= hizt.getElementsByTagName("izenaEuskaraz")[0].firstChild.data;
			var qrHelbidea=hizt.getElementsByTagName("qr")[0].firstChild.data;
			var pdfHelbidea= hizt.getElementsByTagName("pdf")[0].firstChild.data;
			
			table1 = table1 + '<td id="gelaxka'+x+''+y+'" class="bandera"><a href="aukerak.php?qr='+qrHelbidea+'&pdf='+pdfHelbidea+'" ><label><h2>'+izenaEuskaraz+'</h2><h3>'+irudiTestua+'</h3></label></a><div class="izena">'+irudiTestua+'</div></td>';
			x=x+1;
			if(i % 5 == 0) {
				table1 = table1 + "</tr><tr>";
				x=1;
				y=y+1;
			}

		}

			x=1;
			y=1;

             for(i=21; i <= 40; i++) {
                var hizt = hiztegiak[i-1];
                var proba = hizt.getElementsByTagName("izenaEuskaraz");
				var irudiTestua= hizt.getElementsByTagName("izenaNatiboan")[0].firstChild.data;
				var izenaEuskaraz= hizt.getElementsByTagName("izenaEuskaraz")[0].firstChild.data;
				var qrHelbidea=hizt.getElementsByTagName("qr")[0].firstChild.data;
				var pdfHelbidea= hizt.getElementsByTagName("pdf")[0].firstChild.data;
                
		table2 = table2 + '<td id="gelaxka'+x+''+y+'" class="bandera"><a href="aukerak.php?qr='+qrHelbidea+'&pdf='+pdfHelbidea+'" ><label><h2>'+izenaEuskaraz+'</h2><h3>'+irudiTestua+'</h3></label></a><div class="izena">'+irudiTestua+'</div></td>';

		x=x+1;
                if(i % 5 == 0) {
		    table2 = table2 + "</tr><tr>"
		    x=1;
		    y=y+1;
}
            }

	    x=1;
	    y=1;

             for(i; i <= 59; i++) {
                var hizt = hiztegiak[i-1];
				if (hizt != undefined) {
                var proba = hizt.getElementsByTagName("izenaEuskaraz");
				var irudiTestua= hizt.getElementsByTagName("izenaNatiboan")[0].firstChild.data;
				var izenaEuskaraz= hizt.getElementsByTagName("izenaEuskaraz")[0].firstChild.data;
				var qrHelbidea=hizt.getElementsByTagName("qr")[0].firstChild.data;
				var pdfHelbidea= hizt.getElementsByTagName("pdf")[0].firstChild.data;
                
				table3 = table3 + '<td id="gelaxka'+x+''+y+'" class="bandera"><a href="aukerak.php?qr='+qrHelbidea+'&pdf='+pdfHelbidea+'" ><label><h2>'+izenaEuskaraz+'</h2><h3>'+irudiTestua+'</h3></label></a><div class="izena">'+irudiTestua+'</div></td>';

				x=x+1;
				if(i % 5 == 0) {
					table3 = table3 + "</tr><tr>"
					x=1;
					y=y+1;
					}
				}
            }
            table1 = table1 + "</tr></table>";
            table2 = table2 + "</tr></table>";
            table3 = table3 + "</tr></table>";
            document.getElementById("taula").innerHTML = table1;
	    hasi();
        }


        function hurrengoOrria(){
            if(zenbagarrenOrria<3){
                zenbagarrenOrria++;
                if (zenbagarrenOrria==2){
                    document.getElementById("taula").innerHTML = table2;
                }


                else if (zenbagarrenOrria==3){
                    document.getElementById("taula").innerHTML = table3;
                }
            }


        }


        function aurrekoOrria(){
            if(zenbagarrenOrria>1){
                zenbagarrenOrria--;
                if (zenbagarrenOrria==1){
                    document.getElementById("taula").innerHTML = table1;
                }


                else if (zenbagarrenOrria==2){
                    document.getElementById("taula").innerHTML = table2;
                }
            }


        }


document.onkeydown = checkKey;

function zeTaula (gelaxka) {
   var momentukoTaula =    gelaxka.parentNode.parentNode.parentNode;
   var izena = momentukoTaula.id;
   var zenbaki=izena.charAt(izena.length-1);
   return parseInt(zenbaki);
}

function aurrekoTaula (gelaxka) {
    var znbki=zeTaula(gelaxka);
    if (znbki == 3) {
	document.getElementById("taula").innerHTML = table2;
	}
    else {
	if (znbki==2) {
	    document.getElementById("taula").innerHTML = table1;
	    }
	else {
	    document.getElementById("taula").innerHTML = table3;
	    }
    }

}

function hurrengoTaula (gelaxka) {
    var znbki=zeTaula(gelaxka);
    if (znbki == 3) {
	document.getElementById("taula").innerHTML = table1;
	}
    else {
	if (znbki==2) {
	    document.getElementById("taula").innerHTML = table3;
	    }
	else {
	    document.getElementById("taula").innerHTML = table2;
	    }
    }
}

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
	var gelaxkaElementua = document.getElementsByClassName("banderaAukeratua")[0];
	var gelaxkaAukeratua = gelaxkaElementua.id;
	var y=parseInt(gelaxkaAukeratua.charAt(gelaxkaAukeratua.length-1));
	var x=parseInt(gelaxkaAukeratua.charAt(gelaxkaAukeratua.length-2));
	if (y==1) {
	    y=4;
	}
	else {
	    y=y-1;
}
	gelaxkaElementua.className="bandera";
	var hurrengogelaxka = document.getElementById("gelaxka"+x.toString()+y.toString());
	hurrengogelaxka.className="banderaAukeratua";
    }
    else if (e.keyCode == '40') {
        // down arrow
	var gelaxkaElementua = document.getElementsByClassName("banderaAukeratua")[0];
	var gelaxkaAukeratua = gelaxkaElementua.id;
	var y=parseInt(gelaxkaAukeratua.charAt(gelaxkaAukeratua.length-1));
	var x=parseInt(gelaxkaAukeratua.charAt(gelaxkaAukeratua.length-2));
	if (y==4) {
	    y=1;
	}
	else {
	    y=y+1;
}
	gelaxkaElementua.className="bandera";
	var hurrengogelaxka = document.getElementById("gelaxka"+x.toString()+y.toString());
	hurrengogelaxka.className="banderaAukeratua";
    }
    else if (e.keyCode == '37') {
       // left arrow
	var gelaxkaElementua = document.getElementsByClassName("banderaAukeratua")[0];
	var gelaxkaAukeratua = gelaxkaElementua.id;
	var y=parseInt(gelaxkaAukeratua.charAt(gelaxkaAukeratua.length-1));
	var x=parseInt(gelaxkaAukeratua.charAt(gelaxkaAukeratua.length-2));
	if (x==1) {
	    aurrekoTaula(gelaxkaElementua);
	    x=5;
	}
	else {
	    x=x-1;
}
	gelaxkaElementua.className="bandera";
	var hurrengogelaxka = document.getElementById("gelaxka"+x.toString()+y.toString());
	hurrengogelaxka.className="banderaAukeratua";
    }
    else if (e.keyCode == '39') {
       // right arrow
	var gelaxkaElementua = document.getElementsByClassName("banderaAukeratua")[0];
	var gelaxkaAukeratua = gelaxkaElementua.id;
	var y=parseInt(gelaxkaAukeratua.charAt(gelaxkaAukeratua.length-1));
	var x=parseInt(gelaxkaAukeratua.charAt(gelaxkaAukeratua.length-2));
	if (x==5) {
	    hurrengoTaula(gelaxkaElementua)
	    x=1;
	}
	else {
	    x=x+1;
}
	gelaxkaElementua.className="bandera";
	var hurrengogelaxka = document.getElementById("gelaxka"+x.toString()+y.toString());
	hurrengogelaxka.className="banderaAukeratua";
    }

}
function inprimituHizt() {
	document.getElementById("abisua").style.display="block";
	document.getElementById("inprimatuHitzBotoia").disabled=true;
	document.getElementById("inprimatuHitzBotoia").src="img/interface/inprimatu2.jpg";	
	setTimeout(function(){
		document.getElementById("abisua").style.display="none";
	}, 2000);
}
function inprimituJokoa() {
	document.getElementById("abisua").style.display="block";
	document.getElementById("inprimatuJokoaBotoia").disabled=true;
	document.getElementById("inprimatuJokoaBotoia").src="img/interface/zoriesataria2.jpg";
	setTimeout(function(){
		document.getElementById("abisua").style.display="none";
	}, 2000);
}


