import os
import webbrowser
from threading import Timer
from backend.app import app

def abrir_navegador():
    webbrowser.open("http://127.0.0.1:5000")

if __name__ == "__main__":
    if os.environ.get("WERKZEUG_RUN_MAIN") == "true" or not app.debug:
        Timer(1.5, abrir_navegador).start()
        
    app.run(host="127.0.0.1", port=5000, debug=False)