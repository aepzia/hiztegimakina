var table1;
var table2;
var table3;
var kopMax;
var qrHautatua;
var pdfHautatua;

function hasi() {
    var lehena = document.getElementById("gelaxka11");
    lehena.className="banderaAukeratua";
}

        var zenbagarrenOrria = 1;

        function hiztegiakJaso(){
            var i = 1;
            var request = new XMLHttpRequest();
            request.open("GET", "data.xml", false);
            request.send();
            table1 = "<table id='taula1' class='osoa'><tr>";
            table2 = "<table id='taula2' class='osoa'><tr>";
            table3 = "<table id='taula3' class='osoa'><tr>";
            var xml = request.responseXML;
            var hiztegiak = xml.getElementsByTagName("hiztegia");
            kopMax=hiztegiak.length();

	      var y=1;
	      var x=1;


		for(i=1; i <= 20; i++) {
			var hizt = hiztegiak[i-1];
	                var proba = hizt.getElementsByTagName("izenaEuskaraz");
			var irudiTestua= hizt.getElementsByTagName("izenaNatiboan")[0].firstChild.data;
			var izenaEuskaraz= hizt.getElementsByTagName("izenaEuskaraz")[0].firstChild.data;
			var isokodea="eu";
			if (hizt.getElementsByTagName("iso")[0].firstChild != null) {
			  isokodea= hizt.getElementsByTagName("iso")[0].firstChild.data;
			}
			table1 = table1 + '<td id="gelaxka'+x+''+y+'" class="bandera"><a href="aukerak.php?iso='+isokodea+'" ><label><h2>'+izenaEuskaraz+'</h2><h3>'+irudiTestua+'</h3></label></a><div class="izena">'+irudiTestua+'</div></td>';
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
            	var isokodea="eu";
            	if (hizt.getElementsByTagName("iso")[0].firstChild != null) {
              	  isokodea= hizt.getElementsByTagName("iso")[0].firstChild.data;
            	}
			    table2 = table2 + '<td id="gelaxka'+x+''+y+'" class="bandera"><a href="aukerak.php?iso='+isokodea+'" ><label><h2>'+izenaEuskaraz+'</h2><h3>'+irudiTestua+'</h3></label></a><div class="izena">'+irudiTestua+'</div></td>';

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

                        	var isokodea="eu";
                	        if (hizt.getElementsByTagName("iso")[0].firstChild != null) {
        	                  isokodea= hizt.getElementsByTagName("iso")[0].firstChild.data;
	                        }

			table3 = table3 + '<td id="gelaxka'+x+''+y+'" class="bandera"><a href="aukerak.php?iso='+isokodea+'" ><label><h2>'+izenaEuskaraz+'</h2><h3>'+irudiTestua+'</h3></label></a><div class="izena">'+irudiTestua+'</div></td>';


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
    var koordx = gelaxka[8];
    var koodry = gelaxka[9];
    var znbki=zeTaula(gelaxka);
    var hizkZenb = (znbki%3)*20+(koordx-1)*5+koodry;
    if(hizkZenb>maxKop){return;}
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
    var koordx = gelaxka[8];
    var koodry = gelaxka[9];
    var znbki=zeTaula(gelaxka);
    var hizkZenb = (znbki%3)*20+(koordx-1)*5+koodry;
    if(hizkZenb>maxKop){return;}
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
  e.preventDefault();
  if (window.location.pathname.indexOf("aukerak.php")>0) {
    aukerakBotoiak(e);
  }
  else {
    hizkuntzakBotoiak(e);
  }
}

function aukerakBotoiak (e) {

	e = e || window.event;

	if (e.keyCode == '37') {

        var gelaxkaElementua = document.getElementsByClassName("botoiblokeAukeratua")[0];
        var anaiak=gelaxkaElementua.parentNode.getElementsByTagName("div");
        unekoa=0;
        for (var i=0; i<anaiak.length; i++) {
          if (anaiak[i].className=="botoiblokeAukeratua") {
            unekoa=i;
          }
        }

        if (unekoa==0) {
          unekoa=4;
        }
        var gelaxkaBerria = anaiak[unekoa-1];
        gelaxkaElementua.className="botoibloke";
        gelaxkaBerria.className="botoiblokeAukeratua";




	}
	else if (e.keyCode == '39') {
        var gelaxkaElementua = document.getElementsByClassName("botoiblokeAukeratua")[0];
	var anaiak=gelaxkaElementua.parentNode.getElementsByTagName("div");
	unekoa=0;
	for (var i=0; i<anaiak.length; i++) {
	  if (anaiak[i].className=="botoiblokeAukeratua") {
	    unekoa=i;
	  }
	}

	if (unekoa==3) {
	  unekoa=-1;
	}
        var gelaxkaBerria = anaiak[unekoa+1];
        gelaxkaElementua.className="botoibloke";
        gelaxkaBerria.className="botoiblokeAukeratua";

	}
        else if (e.keyCode == '65') {
        var gelaxkaElementua = document.getElementsByClassName("botoiblokeAukeratua")[0];
	if (gelaxkaElementua.id == "etxera") {
          window.location="http://localhost/hiztegimakina/web/hizkuntzak.html";
	}
	else if (gelaxkaElementua.id == "qrerakutsi") {
	  lortuQr();
	}
        else if (gelaxkaElementua.id == "inprimatuHitz" && !(document.getElementById("inprimatuHitzBotoia").disabled)) {
	var isopos = window.location.search.search("iso=");
	var iso = window.location.search.substr(isopos+4);
          $.ajax({url: "./inprimatu.php?izena="+iso, success: function(result){

	   inprimituHizt();

        }});
        }
        else if (gelaxkaElementua.id == "inprimatuJokoa" && !(document.getElementById("inprimatuJokoaBotoia").disabled)) {

          $.ajax({url: "./inprimatu.php?izena=zoriesataria", success: function(result){

           inprimituJokoa();

        }});
        }

        var anaiak=gelaxkaElementua.parentNode.getElementsByTagName("div");
        unekoa=0;
        for (var i=0; i<anaiak.length; i++) {
          if (anaiak[i].className=="botoiblokeAukeratua") {
            unekoa=i;
          }
        }

	}
        else if (e.keyCode == '66') {
	//b botoia
        window.location="http://localhost/hiztegimakina/web/hizkuntzak.html";

	}

	}


function hizkuntzakBotoiak (e) {
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
        var hurrengogelaxka = document.getElementById("gelaxka"+x.toString()+y.toString());
        if(hurrengogelaxka !=null){

                hurrengogelaxka.className="banderaAukeratua";
                gelaxkaElementua.className="bandera";

        }
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
        var hurrengogelaxka = document.getElementById("gelaxka"+x.toString()+y.toString());
        if(hurrengogelaxka !=null){

                hurrengogelaxka.className="banderaAukeratua";
                gelaxkaElementua.className="bandera";

        }



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
	var hurrengogelaxka = document.getElementById("gelaxka"+x.toString()+y.toString());
        if(hurrengogelaxka !=null){

		hurrengogelaxka.className="banderaAukeratua";
		gelaxkaElementua.className="bandera";

        }

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
        var hurrengogelaxka = document.getElementById("gelaxka"+x.toString()+y.toString());
        if(hurrengogelaxka !=null){

                hurrengogelaxka.className="banderaAukeratua";
                gelaxkaElementua.className="bandera";

        }
    }
    else if (e.keyCode == '65') {
        //a botoia
	var gelaxkaElementua = document.getElementsByClassName("banderaAukeratua")[0];
	var hurrengoLotura = gelaxkaElementua.childNodes[0].getAttribute("href");
	var s=window.location.pathname;
	var n=s.lastIndexOf("/");
	s = s.substring(0, n != -1 ? n : s.length);
	window.location="http://localhost"+s+"/"+hurrengoLotura;
    }
    else if (e.keyCode == '66') {
        //b botoia
	window.location="http://localhost/hiztegimakina/web/hizkuntzak.html";
    }

}
function inprimituHizt() {
	document.getElementById("abisua").style.display="block";
	document.getElementById("inprimatuHitzBotoia").disabled=true;
	document.getElementById("inprimatuHitzBotoia").src="img/interface/inprimatu2.jpg";
	setTimeout(function(){
		document.getElementById("abisua").style.display="none";
	}, 25000);
}
function inprimituJokoa() {
	document.getElementById("abisua").style.display="block";
	document.getElementById("inprimatuJokoaBotoia").disabled=true;
	document.getElementById("inprimatuJokoaBotoia").src="img/interface/zoriesataria2.jpg";
	setTimeout(function(){
		document.getElementById("abisua").style.display="none";
	}, 25000);
}
