import time
from flask import Flask
from flask import jsonify
from flask.json import JSONDecoder

app = Flask(__name__)

class BasicElemen:
    
    def __init__(self, tag, attr = {}) -> None:
        self.tag = tag
        self.attr = {}
        self.children = []
        self.key = "key-12sd"

    def addChildren(self, elem):
        if isinstance(elem, str):
            self.children.append({ "tag": "jdev", "children": elem})
        elif isinstance(elem, int):
            self.children.append({ "tag": "jdev", "children": elem})
        else:
            self.children.append(elem)

class JButton:
    def __init__(self, label, color='primary', variant='contained', href=None) -> None:
        self.tag = 'jbutton'
        self.attr = {}
        self.attr['key'] = 'button1'
        self.attr['label'] = label
        self.attr['color'] = color
        self.attr['variant'] = variant
        self.attr['href'] = href

class JPaper(BasicElemen): 
    def __init__(self) -> None:
        super().__init__('jpaper')


@app.route('/time')
def get_current_time():
    elements = []
    elements.append(JButton(label="Click Me").__dict__)
    elements.append(JButton(label="Hi", color='secondary').__dict__)
    print(elements)
    return jsonify(elements)


@app.route('/ui/header')
def get_ui_header():
    elements = []
    paper = JPaper()
    paper.addChildren('Header')
    elements.append(paper.__dict__)
    print(elements)
    return jsonify(elements)
