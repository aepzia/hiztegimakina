<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">
<html> <head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="./estiloa.css">
	<script src="scriptak.js"></script>
	<script>
		function lortuQr(){
			 setTimeout(function(){ 
				document.getElementById("qr").src="<?php echo $_GET['qr']?>";
				document.getElementById("qr").style.display="block";
			}, 3000);
			alert("Display none!");
                                document.getElementById("qr").style.display="none";
		}
	</script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<!-- Modal -->
<body>
<div id="abisua">
	<img src="img/interface/loading.gif" alt="loading"/>
</div>
<div>
	<img  id="qr"/>
</div>
<div class="aurrebista">
<img border="1px" src="img/preview/" alt="PDFaren aurrebista"/>
</div>


<hr>

<div id="behekobarra">
  <div class="botoibloke">
    <input type="image" id="inprimatuHitzBotoia" src="img/interface/inprimatu1.jpg" onclick="inprimituHizt()" class="ezaukeratua"></input>
  </div>
  <div class="botoibloke">
    <input type="image" id="inprimatuJokoaBotoia" class="ezaukeratua" src="img/interface/zoriesataria1.jpg"  onclick="inprimituJokoa()"></input>
  </div>
  <div class="botoibloke">
     <input type="image" class="ezaukeratua" src="img/interface/bidi1.jpg" onclick="lortuQr()"></input>
  </div>
  <div class="botoibloke">
    <input type="image" class="ezaukeratua" src="img/interface/etxea1.jpg"></input>
  </div>
</div>

</body> </html>
