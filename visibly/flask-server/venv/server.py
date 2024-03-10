from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/get_message')
def get_message():
    # Your Python script logic here
    message = "This is a message from the server"
    return jsonify({'message': message})

if __name__ == '__main__':
    app.run(port=5000)
