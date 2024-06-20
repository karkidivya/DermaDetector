# Skin Disease Detector using EfficientNet and tinyllma

## Project Summary and Motivation
The aim of this project is to develop a comprehensive tool capable of predicting the likelihood of a skin lesion being a specific skin disease based on an image of the lesion. A skin lesion refers to an area of the skin that has a different texture or appearance compared to the surrounding skin. Skin diseases, ranging from benign conditions to serious ailments like skin cancer, can significantly impact an individual's health and quality of life. Early detection and accurate diagnosis are crucial for effective treatment and better health outcomes.
### Key Facts About Skin Diseases
Skin diseases, including cancerous and non-cancerous conditions, present a wide spectrum of challenges.
Every year, there are more new cases of skin cancer than the combined incidence of cancers of the breast, prostate, lung, and colon.
- Skin diseases is a prevalent disease, with new cases surpassing the combined incidence of several other non-canerous and cancerous diseases.
- Early detection of melanoma, a type of skin cancer, has a significant impact on survival rates. The estimated 5-year survival rate for early-detected melanoma is about 98%.

### Motivation

Given the importance of early detection, the development of a tool to assist in the early identification of skin diseases can contribute to better health outcomes.
This project leverages advanced machine learning techniques, specifically Convolutional Neural Networks (CNNs) and EfficientNet, to achieve this goal.

## Development Process and Data

The project involves constructing a CNN model along with a LLM model to predict the likelihood that a skin lesion is one of several specified skin diseases.
The application users can click or upload their affected skin areas photo along with the description of their problem, and the model will accurately predict the disease and provides
us the Name of disease along with the ways to prevent and/or treatment plan for it.
In order to make the developmental task easier, we imported a pre-trained version of the efficientnet_bo model and implemented in our Skin Disease Detection tasks and further trained(fine-tuned) it on multiple epochs on around 4000+ datasets of 15 different classes of skin diseases.
The training, validation and testing losses are calculated along with the precision, accuracy, recall etc. and we viewed that these losses got significantly decreased after the completion of model
fine-tuning.

### Data
The Datasets link is presented here: 
  https://bit.ly/45AMSHV
The dataset used for this project comprises images from the International Skin Imaging Collaboration (ISIC), and many other datasets from Kaggle, ImageNet etc.
The data includes both benign(non-cancerous) and malignant(cancerous) lesions, with the following breakdown:
Total images used:
- Benign Images: ~2500
- Malignant Images: ~1500
  
-> More specifically the 15 classes of Skin disease images are prepared as:  
- Actinic Keratosis  
- Basal Cell Carcinoma  
- Dermato Fibroma  
- Melanoma  
- Nevus  
- Pigmented Benign Keratosis  
- Seborrheic Keratosis  
- Squamous Cell Carcinoma  
- Vascular Lesion  
- Eczema  
- Atopic Dermatitis  
- Psoriasis  
- Tinea Ringworm Candidiasis  
- Warts Molluscum  
- Acne/Pimples  


### Preprocessing

The following preprocessing steps were applied to the images:

- Visual inspection to filter out low-quality or non-representative images
- Image resizing to 224x224 pixels
- Normalization to standardize the pixel values

### CNN Model

The initial model is based on EfficientNet, a state-of-the-art CNN architecture known for its efficiency and accuracy. The model development process includes:

1. Data augmentation: Techniques such as rotation, noise addition, and scaling to prevent overfitting.
2. Transfer learning: Utilizing a pre-trained EfficientNet model and fine-tuning it with additional layers to enhance performance.

### Model Evaluation
Receiver operating characteristics (ROC) curves are graphs showing classifiers' performance by plotting the true positive rate and false positive rate. The area under the ROC curve (AUC) measures the performance of machine learning algorithms. ROC curves visually depict the statistical accuracy of classifier selection and this curve works by plotting the true positive rate (TPR) on the y-axis and the false positive rate (FPR) on the x-axis of a graph.
The model is evaluated using many evaluation metrices such as accuracy, recall, precision, F1Score etc. 

## Results Presentation

The final tool predicts the likelihood that a skin lesion is one of several specified skin diseases. The results are presented to the user through mobile applications.

### Mobile Applications
  #Mobile Application (React Native Expo)
Our CNN model will be loaded into the backend(Flask) to make local predictions. The image and symptoms information then will be send to the backend server and processed, after that the result of the prediction is sent back to mobile app along with the skin disease name, prediction accuracy, skin care recommendations.
For now, both the mobile phone and the laptop containg the Flask server has to be connected in the same Wi-Fi network in order to send_request and receive_response from mobile UI and backend respectively.

## Get started with expo
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the app
   ```bash
    npx expo start
   ```
3. Update the .env file with your device ip address
  ```bash
    YOUR_IP_ADDRESS = 192.162.1.66 
   ```
## Get started with Flask(backend)
   1. Install dependencies
   ```bash
   pip install -r requirements.txt
   ```
2. Start the app
   ```bash
    python3 app.py
   ```

## Project Schedule

| Activity                           | Days | Status | Progress |
|------------------------------------|------|--------|----------|
| Data Acquisition                   | 1    | Done   | ++++     |
| Initial Preprocessing and Visualizations | 1 | Done | ++++ |
| First Model Construction and Tuning | 2 | Done | ++++ |
| Model Optimization I (Data Augmentation) | 1 | Done | ++++ |
| Model Optimization II (Transfer Learning) | 3| Done | ++++ |
| Model Optimization III (Fine Tuning) | 4| Done | ++++ |
| App Development            | 4   | Done| ++++     |
| Presentation Preparation           | 5   | Done   | ++++     |

## Tools Used

- Pytorch (Google Colab GPU High Performance Cloud Computing)
- Python
- Matplotlib
- React native for App development
- Flask for backend
- Axios for APIs




