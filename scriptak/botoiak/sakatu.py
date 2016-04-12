import RPi.GPIO as GPIO ## Import library that lets you control the Pi's GPIO pins
from time import sleep ## Import time for delays


#http://stackoverflow.com/questions/5714072/simulate-keystroke-in-linux-with-python
from subprocess import Popen, PIPE


up_sequence = '''keydown Up
keyup Up
'''

down_sequence = '''keydown Down
keyup Down
'''

left_sequence = '''keydown Left
keyup Left
'''

right_sequence = '''keydown Right
keyup Right
'''

on_sequence = '''keydown a
keyup a
'''

at_sequence = '''keydown b
keyup b
'''

def keypress(sequence):
    p = Popen(['xte'], stdin=PIPE)
    p.communicate(input=sequence)

gorapz=37
beherapz=36
ezkerpz=32
eskuinpz=22
onartupz=11
atzerapz=16

#GPIO.cleanup()
GPIO.setwarnings(True) ## Disables messages about GPIO pins already being in use
GPIO.setmode(GPIO.BOARD) ## Indicates which pin numbering configuration to use

GPIO.setup(gorapz, GPIO.IN, pull_up_down=GPIO.PUD_UP) ## Tells it that pin 16 (button) will be giving input
GPIO.setup(beherapz, GPIO.IN, pull_up_down=GPIO.PUD_UP) ## Tells it that pin 16 (button) will be giving input
GPIO.setup(ezkerpz, GPIO.IN, pull_up_down=GPIO.PUD_UP) ## Tells it that pin 16 (button) will be giving input
GPIO.setup(eskuinpz, GPIO.IN, pull_up_down=GPIO.PUD_UP) ## Tells it that pin 16 (button) will be giving input
GPIO.setup(onartupz, GPIO.IN, pull_up_down=GPIO.PUD_UP) ## Tells it that pin 16 (button) will be giving input
GPIO.setup(atzerapz, GPIO.IN, pull_up_down=GPIO.PUD_UP) ## Tells it that pin 16 (button) will be giving input

k=0
while True:
  if GPIO.input(gorapz)==1:
    keypress(up_sequence)
    sleep(0.25)
    k=k+1
    print "GORA"+str(k)
  if GPIO.input(beherapz)==1:
    keypress(down_sequence)
    sleep(0.25)
    k=k+1
    print "BEHERA"+str(k)
    print k

  if GPIO.input(ezkerpz)==1:
    keypress(left_sequence)
    sleep(0.25)
    k=k+1
    print "EZKERRERA"+str(k)
    print k

  if GPIO.input(eskuinpz)==1:
    keypress(right_sequence)
    sleep(0.25)
    k=k+1
    print "ESKUINERA"+str(k)
    print k

  if GPIO.input(onartupz)==1:
    keypress(on_sequence)
    sleep(0.25)
    k=k+1
    print "ONARTU"+str(k)
    print k

  if GPIO.input(atzerapz)==1:
    keypress(at_sequence)
    sleep(0.25)
    k=k+1
    print "ATZERA"+str(k)
    print k

GPIO.cleanup()
