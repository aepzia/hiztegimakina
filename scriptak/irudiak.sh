cd hiztegiak
mkdir aurreirudiak
for i in *
do
	convert $i aurreirudiak/$i.jpg
done
cd aurreirudiak
mkdir irudiMoztuak
for i in *.jpg
do
	convert -crop 550x320+0+300 $i irudiMoztuak/$i.png
done
