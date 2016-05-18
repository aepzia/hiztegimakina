<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">
<html> <head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="./estiloa.css">
<!--	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>-->
	<script src="./jquery.min.js"></script>
	<script src="scriptak.js"></script>
	<script>
		function lortuQr(){
			document.getElementById("qr").src="img/qr/<?php echo $_GET['iso']?>.png";
			document.getElementById("qr").style.display="block";
		}
	</script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<!-- Modal -->
<body background="img/interface/fondoa2.jpg">
<div id="abisua">
	<img src="img/interface/loading.gif" alt="loading"/>
</div>
<div>
	<img  id="qr"/>
</div>
<div class="aurrebista">
<img border="1px" src="img/preview/<?php echo $_GET['iso']?>.png"/ alt="PDFaren aurrebista"/>
</div>



<div id="behekobarra">
  <div class="botoiblokeAukeratua" id="inprimatuHitz">
     <input type="image" id="inprimatuHitzBotoia" src="img/interface/inprimatu1.jpg" onclick="inprimituHizt()" class="ezaukeratua"></input>
  </div>
  <div class="botoibloke" id="inprimatuJokoa">
    <input type="image" id="inprimatuJokoaBotoia" class="ezaukeratua" src="img/interface/zoriesataria1.jpg" onclick="inprimituJokoa()"></input>
  </div>
  <div class="botoibloke" id="qrerakutsi">
     <input type="image" id="qrErakutsiBotoia" class="ezaukeratua" src="img/interface/bidi1.jpg" onclick="lortuQr()"></input>
  </div>
  <div class="botoibloke" id="etxera">
    <input type="image" id="etxeraBotoia" class="ezaukeratua" src="img/interface/etxea1.jpg"></input>
  </div>
</div>

</body> </html>

