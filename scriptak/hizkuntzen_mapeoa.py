#!/usr/bin/env python
# -*- coding: utf-8 -*-
#zurgintzako html-xml-tik excella lortzeko python programa


import re #espresio erregularrak erabiltzeko paketea
import pdb


f = open("hizkuntzak_mapeoa.csv")
#lerroa = f.readline()
firt = open("hizkuntzak_mapeoa.xml","w")



#pdb.set_trace()

firt.write("<?xml version="+'"1.0"'+' encoding="UTF-8"?>\r\n')
firt.write("<hiztegiak zenbat="+'"52">')

for lerroa in f:
    hizkuntza_t=lerroa.split(",")
    firt.write("<hiztegia>"+"\r\n")
    #pdb.set_trace()
    firt.write("\t<izenaEuskaraz>"+hizkuntza_t[0].strip("\n")+"</izenaEuskaraz>"+"\r\n")
    firt.write("\t<izenaNatiboan>"+hizkuntza_t[2]+"</izenaNatiboan>"+"\r\n")
    firt.write("\t<iso>"+hizkuntza_t[1]+"</iso>"+"\r\n")
    firt.write("\t<kontagailua>0</kontagailua>"+"\r\n")
    firt.write("</hiztegia>"+"\r\n")
    
f.close()
firt.write("</hiztegiak>")
firt.close()
