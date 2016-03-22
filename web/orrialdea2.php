<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">
<html> <head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="./estiloa.css">
	<script src="scriptak.js"></script>
	<script>
		function lortuQr(){
			document.getElementById("qr").src="<?php echo $_GET['qr']?>";
			document.getElementById("qr").style.display="block";
		}
	</script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<!-- Modal -->
<body>
<div id="abisua">
	<img src="img/interface/loading.gif" alt="PDFaren aurrebista"/>
</div>
<div>
	<img  id="qr"/>
</div>
<div class="aurrebista">
<img border="1px" src="aurrebistak/preview.png"/ alt="PDFaren aurrebista"/>
</div>


<hr>

<div id="behekobarra">
  <div class="botoibloke">
    <input type="image" id="inprimatuHitzBotoia" src="img/interface/inprimatu2.png" onclick="inprimituHizt()" class="ezaukeratua"></input>
  </div>
  <div class="botoibloke">
    <input type="image" id="inprimatuJokoaBotoia" class="ezaukeratua" src="img/interface/zoriesataria2.png"  onclick="inprimituJokoa()"></input>
  </div>
  <div class="botoibloke">
     <input type="image" class="ezaukeratua" src="img/interface/bidi2.png" onclick="lortuQr()"></input>
  </div>
  <div class="botoibloke">
    <input type="image" class="ezaukeratua" src="img/interface/etxea2.png"></input>
  </div>
</div>

</body> </html>
