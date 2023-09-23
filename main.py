# pip install -r requirements.txt
# python main.py

import eel
eel.init('templates')

@eel.expose
def my_python_function(a, b):
    return a + b

@eel.expose
def workWithValues(values):
    print('name:', values["name"])
    print('other:', values["other"])

eel.start('home.html')
