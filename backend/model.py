import torch
from torchvision import transforms, models
from PIL import Image

# Define the image transformations (should match those used during training)
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

# Load the trained model
model_path = '/home/shangkat5/Desktop/Viveka-Hackathon/backend/modelFile.pth'  # Update the path to your model file
# model_path = 'path_to_your_model_file/modelFile.pth'  # Update the path to your model file



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
"Acne/Pimples"]  # Replace with your actual list of diseases

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
    print(predicted_class,"hhhhhhhhhhhhheeeeeelllooo")

    return predicted_class
