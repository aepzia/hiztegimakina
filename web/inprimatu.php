<?php
$file=$_GET['izena'];
$dir=getcwd();
if ($file == "zoriesataria") {
$fitxategia = $dir."/zoriesataria/zoriesataria.pdf";
}
else {
$fitxategia = $dir."/hiztegiak/".$file.".pdf";
}
echo $fitxategia;
echo "<br/>";
echo $file;
echo "<br/>";
echo "lpr ".$fitxategia." -P HLL2340D";
shell_exec("lpr ".$fitxategia." -P HLL2340D");
?>

