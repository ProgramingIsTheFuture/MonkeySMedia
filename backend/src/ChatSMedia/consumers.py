from channels.generic.websocket import JsonWebsocketConsumer

class ChatConsumer(JsonWebsocketConsumer):
    def connect(self):
        self.accept()

    def receive_json(self, content):
        print("contet: ", content)

    def disconnect(self, close_code):
        pass
