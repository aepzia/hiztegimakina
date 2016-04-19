<?php
$file=$_GET['izena'];
$dir=getcwd();
$fitxategia = $dir."/hiztegiak/HiztegiaEusk".$file.".pdf";
echo $fitxategia;
echo "<br/>";
echo $file;
echo "<br/>";
echo "lpr ".$fitxategia." -P HLL2340D";
exec("lpr ".$fitxategia." -P HLL2340D");
?>

