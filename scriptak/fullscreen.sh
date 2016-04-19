
#http://raspberrypi.stackexchange.com/questions/30093/epiphany-browser-in-full-screen-mode

sudo pkill python
sudo -u pi epiphany-browser -a --profile ~/.config "http://localhost/hiztegimakina/web/hizkuntzak.html" --display=:0 &
sudo python botoiak/sakatu.py &
sleep 5s;
xte "key F11" -x:0

