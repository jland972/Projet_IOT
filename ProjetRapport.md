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
* AOSONG DHT11 - Temperature and Humidity Sensor

Software.
--------
* Arduino IDE
* ESP8266 board et lib pour Arduino IDE
* Apache2

Schéma Hardware.
---------------
![alternative](Chêmma_Ardewairent.png)

Conection NodeMCU et BRKWS01.
---------------------------
BRKWS01 utilise UART, donc on a utilisé Software Serial avec le NodeMCU. On utilisé les pins D7 (GPIO 13) et pins D8 (GPIO15).

* Pin D7 - GPIO 13 - Rx
* Pin D8 - GPIO 15 - Tx

___________________________________________________________________________________________________________________________________

SigFox modem module ID et PAC number.
-------------------------------------

Pour communiquer avec le SigFox modem, on utilise UART. Cela permet la communication entre le modem sigfox et le MCU.
Device ID est un id unique pour le module.



Partie Open Weather.
--------------------

* Choix d'OpenWeatherMap : Nous avons utiliser cet API pour nous donner les données météo car il a été vu en cours et que savons comment cela fonctionne

* Nous avons affiché les résultats grâce a VueJs, qui a été vu en cours.

Grâce à la clé fournie par le site, nous pouvons avoir la météo du lieu où nous sommes. Nous affichons le tout sur une page HTML. 

Partie Donnée locale.
---------------------

* On récuère les données du capteurs à savoir tempérarture et humidité.
* Nous avons décidé d'utiliser Sigfox pour que l'ensemble de nos données locales soient accessibles partout (comme les données de l'API) et donc de pouvoir créer une application qui fonctionne partout.
* On transmet les données sur le réseau sigfox en tant que message.
* On met en place une fonction de callback qui écrit les données reçu dans un json.
* On lit la donnée du json et on affiche sur la page html.



Schéma du fonctionnement.
-------------------------
![alternative](Fonctionnement.png)


## How to Use

* Lancer ngrok avec la commande suivante:
```bash
   ./ngrok http 5000 -region eu
```

![alternative](doc/ngrok.png)

* Récupérer le lien ngrok et le mettre dans la fonction de callback dans les paramètres Sigfox:

1. Dans la liste des appareils, trouver le votre en utilisant votre ID, cliquer sur le nom de votre appareil.

2. Clique sur le menu CALLBACKS , puis sur new
![ngrok](doc/backend-step1.png)

3. Crée un "Custom callback"
![ngrok](doc/backend-step2.png)

4. Configure avec ton URL ngrok
![ngrok](doc/backend-step3.png)

* Allume iot.py avec la commande
```bash
   python3 iot.py
```

* Brancher ensuite votre station météo au réseau électrique.

* Enfin rendez-vous sur la page http://localhost/

* Et voila! ;)

