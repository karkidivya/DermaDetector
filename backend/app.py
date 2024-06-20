from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import base64
import io
from model import predict  # Import the predict function from model.py

app = Flask(__name__)
CORS(app)

# model and toknizer file path
model_dir = 'backend/models/text'
tokenizer_dir = 'backend/models/tokenizer'

@app.route('/ping', methods=['GET'])
def ping():
    return jsonify({'message': 'pong'})

@app.route('/predict', methods=['POST'])
def predict_route():
    data = request.json

    # Decode the image from base64
    img_data = base64.b64decode(data['image'])
    image = Image.open(io.BytesIO(img_data)).convert("RGB")

    # Extract additional textual information if needed
    text_info = data.get('text', '')
    print(text_info)  # Currently not used in prediction

    # Predict using the model
    predicted_class, confidence = predict(image)
    print(predicted_class, "test", confidence)
    recommendation = "randomrandomsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsdsdsddsd"
    return jsonify({'predicted_class': predicted_class, 'confidence' : confidence, 'recommendation' : recommendation })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)




