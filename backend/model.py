import torch
from torchvision import transforms, models
from PIL import Image
import torch.nn.functional as F


# Define the image transformations (should match those used during training)
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

# Load the trained model
model_path = './modelFile.pth'  # Update the path to your model file


# list of diseases
list_diseases = ["Actinic Keratosis",
"Basal Cell Carcinoma",
"Dermato Fibroma",
"Melanoma",
"Nevus",
"Pigmented Benign Keratosis",
"Seborrheic Keratosis",
"Squamous Cell Carcinoma",
"Vascular Lesion",
"Eczema",
"Atopic Dermatitis",
"Psoriasis",
"Tinea Ringworm Candidiasis",
"Warts Molluscum",
"Acne/Pimples"]  

num_classes = len(list_diseases)  # Ensure this matches your number of classes
image_model = models.efficientnet_b0(pretrained=False)
num_features = image_model.classifier[1].in_features
image_model.classifier[1] = torch.nn.Linear(num_features, num_classes)
image_model.load_state_dict(torch.load(model_path, map_location=torch.device('cpu')))
image_model.eval()

# Move the model to the device (GPU or CPU)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
image_model.to(device)

def predict(image, model=image_model, transform=transform, device=device):
    # Preprocess the image
    image = transform(image)
    image = image.unsqueeze(0)  # Add batch dimension

    # Move the image to the device
    image = image.to(device)

    # Run the image through the model
    with torch.no_grad():
        output = model(image)

    # Get the predicted class index
    _, predicted = torch.max(output, 1)
    predicted_class = list_diseases[predicted.item()]
    

     # Run the image through the model
    with torch.no_grad():
        output = model(image)
        probabilities = F.softmax(output, dim=1)


    # out = {}
    # print(probabilities.shape)
    # for disease_name, confidence in zip(list_diseases, probabilities[0]):
    #     out[disease_name] = round(confidence.item(), 4)
    # return out

    confidence, predicted = torch.max(probabilities, 1)
    predicted_class = list_diseases[predicted.item()]
    confidence = confidence.item() * 100
    confidence = "{:.2f}".format(confidence)
    
    return predicted_class, confidence


# text_info = "The symptoms that I have are scaly patches or lesions that are red on sun-exposed areas of the skin. Like the face, scalp, ears, neck, hands, and forearms"
# test_image = Image.open('./test-data/image_46.jpg').convert('RGB')

# out = predict(test_image)
# print(out)


# import and initialize text model
# from TextModel import TextModel
# # model and toknizer file path
# model_dir = 'models/text'
# tokenizer_dir = 'models/tokenizer'

# # instantiate text model class
# TEXT_MODEL = TextModel(model_dir, tokenizer_dir)


# def img_txt_pipe():
#     disease_pred, confidence = predict(test_image)
#     recommendation = TEXT_MODEL.generate_text(disease_pred, text_info)
#     print(recommendation)


# img_txt_pipe()