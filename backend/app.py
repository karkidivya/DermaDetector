from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import io
import base64
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.optimizers import Adam

app = Flask(__name__)
CORS(app)

def custom_load_model(filepath):
    model = load_model(filepath, compile=False)  # Load the model without compiling it
    optimizer = Adam(learning_rate=0.001)  # Set your learning rate here
    model.compile(optimizer=optimizer, loss='categorical_crossentropy')  # Set your loss here
    return model

model = custom_load_model('model.h5')

def preprocess_image(image):
    image = image.resize((224, 224))  # Adjust size according to your model's requirements
    image = np.array(image)
    image = image / 255.0  # Normalize the image
    image = np.expand_dims(image, axis=0)  # Add batch dimension
    return image

def preprocess_text(text):
    # Implement text preprocessing here if required by your model
    # For example, if you need to convert text to numerical vectors
    return text  # Adjust based on your model

@app.route('/predict', methods=['POST'])
def predict():
    print("hello world")
    data = request.json
    print(data)
    # # Decode the image
    # img_data = base64.b64decode(data['image'])
    # image = Image.open(io.BytesIO(img_data))

    # Extract additional textual information
    text_info = data['text']
    print(text_info)

    # Preprocess the image and text
    # preprocessed_image = preprocess_image(image)
    # preprocessed_text = preprocess_text(text_info)

    # # Predict using the model
    # prediction = model.predict([preprocessed_image, preprocessed_text])

    # # Extract treatment solution from the prediction
    # treatment_solution = prediction[0]  # Adjust based on your model's output structure

    # return jsonify({'treatment_solution': treatment_solution.tolist()})
    return jsonify({'treatment_solution': "run"})

if __name__ == '__main__':
    print("hello world")
    app.run(debug=True)
    
