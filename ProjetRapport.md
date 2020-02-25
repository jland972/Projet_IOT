Rapport de projet d'IoT : Faire une station météo avec sigfox.
=============================================================

## Participant.

### Grégoire de Mentque,
### Jérémy Cledelin,
### Simon Frémont,

Hardware.
-------- 
* NodeMCU 1.0
* SNOC Breakout Board - Sigfox BRKWS01


Software.
--------
* Arduino IDE
* ESP8266 board et lib pour Arduino IDE

Hardware pinout.
---------------
* ### NodeMCU
![NodeMCU](https://github.com/romaintribout/Sigfox-NODEMCU-BRKWS01-Wisol-SFM10R1/blob/master/doc/nodemcu_pins.png?raw=true)

* ### SNOC Breakout Board - Sigfox BRKWS01
![SNOC](https://github.com/romaintribout/Sigfox-NODEMCU-BRKWS01-Wisol-SFM10R1/blob/master/doc/BRKWS01_PCB_pinout.png?raw=true)

Wiring NodeMCU with BRKWS01.
---------------------------
BRKWS01 utilise UART, donc on a utilisé Software Serial avec le NodeMCU. On utilisé les pins D7 (GPIO 13) et pins D8 (GPIO15).

* Pin D7 - GPIO 13 - Rx
* Pin D8 - GPIO 15 - Tx

___________________________________________________________________________________________________________________________________

SigFox modem module ID et PAC number.
-------------------------------------

Pour communiquer avec le SigFox modem, on utilise UART. Cela permet la communication entre lesigfox modem et le MCU.
Device ID est un id unique pour le module.


## Grégoire de Mentque : 
* Partie OpeWeatherMap;
* Choix d'OpenWeatherMap : Nous avons utiliser cet API pour nous donner les données météo car il a été vu en cours et que savons comment cela fonctionne
* Nous avons affiché les résultats grâce a VueJs, qui a été vu en cours.

Grâce à la clé fournit par le site, nous pouvons avoir la météo du lieu où nous sommes. Nous affichons le tout sur une page HTML. 

## Simon Frémon et Jérémy Clédelin :

Partie sigfox;

