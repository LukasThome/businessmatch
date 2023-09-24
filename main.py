# pip install -r requirements.txt
# python main.py
from src.model.startup import Startup
from src.controller.startup import StartupController

import eel
eel.init('templates')

startups = []

startupController = StartupController()


@eel.expose
def workWithValues(values):
    startupController.add(values)


@eel.expose
def sendList():
    if(startupController.filePath.exists()):
        s = startupController.load()
        return s


eel.start('home.html')
