from channels.generic.websocket import JsonWebsocketConsumer

class ChatConsumer(JsonWebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive_json(self, json_data):
        print(self.scope["user"])
        message = json_data['message']
        print(message)

        self.send_json({
            'message': message
        })
