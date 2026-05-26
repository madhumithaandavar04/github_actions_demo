from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return jsonify(message="Hello, World!")


@app.route('/api/message', methods=['GET'])
def get_message():
    return jsonify(
        {
            'youtube': 'https://www.youtube.com/@harshaselvi',
            "instagram": "https://www.instagram.com/harsha_selvi/",
            "linkedin": "https://www.linkedin.com/in/harsha-js"
        }
    )


if __name__ == '__main__':
    app.run()
