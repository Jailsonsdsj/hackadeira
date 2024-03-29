from flask import Flask, render_template
from flask_socketio import SocketIO
from datetime import datetime

app = Flask(__name__)
socket_io = SocketIO(app, cors_allowed_origins="*")

@socket_io.on('connect')
def handle_connect():
    print('new connection')

@socket_io.on('to-server')
def handle_to_server(arg):
    while True:
        print(f'new to-server event: {arg}')
        current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        socket_io.emit('from-server', {'data': current_time, 'sensor_data': 401012})


if __name__ == '__main__':
    socket_io.run(app, port=50000, allow_unsafe_werkzeug=True)