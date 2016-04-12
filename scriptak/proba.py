#!/usr/bin/env python
# -*- coding: utf-8 -*-
import qrcode
img = qrcode.make("Hola desde Recursos Python!")
f = open("output.png", "wb")
img.save(f)
f.close()
