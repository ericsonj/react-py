import time
from flask import Flask
from flask import jsonify
from flask.json import JSONDecoder

app = Flask(__name__)

class JButton:
    def __init__(self, label, color='primary', variant='contained') -> None:
        self.tag = 'jbutton'
        self.attr = {}
        self.attr['key'] = 'button1'
        self.attr['label'] = label
        self.attr['color'] = color
        self.attr['variant'] = variant


@app.route('/time')
def get_current_time():
    elements = []
    elements.append(JButton(label="Click Me").__dict__)
    elements.append(JButton(label="Hi", color='secondary').__dict__)
    print(elements)
    return jsonify(elements)
