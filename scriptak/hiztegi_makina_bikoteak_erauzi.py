#!/usr/bin/env python
# -*- coding: utf-8 -*-
#zurgintzako html-xml-tik excella lortzeko python programa


import re #espresio erregularrak erabiltzeko paketea


f = open("hizkuntzak_azkena.csv")
#lerroa = f.readline()
firt = open("hizkuntzak_azkena_irt.txt","w")
kont = 1
for lerroa in f:
    if (kont==1):
        hizkuntza_t=lerroa.split("\t")
    kont = kont + 1

f.close()
firt.close()


for zki in range(len(hizkuntza_t)):
    
    f = open("hizkuntzak_azkena.csv")
    firt = open("hizkuntzak_azkena_"+hizkuntza_t[zki]+".txt","w")
    for lerroa in f:
        sinonimoak_t = lerroa.split("\t")
        eusk=sinonimoak_t[0]
        sinonimoa=sinonimoak_t[zki]
        if (eusk<>'') :
            firt.write("<cstyle:"+hizkuntza_t[zki]+">"+sinonimoa+"<cstyle:>\r\n")
    
    #firt.write("<cstyle:eu>"+eusk+"<cstyle:>\t<cstyle:"+hizkuntza_t[zki]+">"+sinonimoa+"<cstyle:>\r\n")

    f.close()
    firt.close()




