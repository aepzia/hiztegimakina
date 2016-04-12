#!/usr/bin/env python
# -*- coding: utf-8 -*-
import qrcode

f = open("helbide_zerrenda.csv")
#lerroa = f.readline()
#pdb.set_trace()

for lerroa in f:
    hizkuntza_t=lerroa.split("\t")
    img = qrcode.make(hizkuntza_t[1])
    fh = open(hizkuntza_t[0]+".png", "wb")
    img.save(fh)
    fh.close()
    
f.close()
