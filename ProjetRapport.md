Rapport de projet d'IoT : Faire une station météo avec sigfox
=============================================================

##Participant

### Grégoire de Mentque
### Jérémy Cledelin
### Simon Frémont

Hardware
-------- 
* NodeMCU 1.0
* SNOC Breakout Board - Sigfox BRKWS01


Software
--------
* Arduino IDE
* ESP8266 board and lib for Arduino IDE

Hardware pinout
---------------
* ### NodeMCU
![NodeMCU](https://github.com/romaintribout/Sigfox-NODEMCU-BRKWS01-Wisol-SFM10R1/blob/master/doc/nodemcu_pins.png?raw=true)

* ### SNOC Breakout Board - Sigfox BRKWS01
![SNOC](https://github.com/romaintribout/Sigfox-NODEMCU-BRKWS01-Wisol-SFM10R1/blob/master/doc/BRKWS01_PCB_pinout.png?raw=true)

Wiring NodeMCU with BRKWS01
---------------------------
BRKWS01 use UART, so we will use Software Serial with the NodeMCU. With pin D7 (GPIO 13) and pin D8 (GPIO15).

* Pin D7 - GPIO 13 - Rx
* Pin D8 - GPIO 15 - Tx

________________________________________________________________________________________________________________________________________________

To communicate with the SigFox modem, we use UART => communication between sigfox modem and the MCU

Thanks to the device ID and PAC number, we can identify the modem, take a subscription and register  in the sigfox backend.
