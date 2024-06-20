#  backenc/TextModel.py
from transformers import AutoModelForCausalLM, AutoTokenizer
from transformers import BitsAndBytesConfig

# initial bitsandbytes config
nf4_config = BitsAndBytesConfig(load_in_4bit=True, bnb_4bit_use_double_quant=True)

# the text model class
class TextModel():
    def __init__(self, model_dir, tokenizer_dir, device='cpu'):
        self.model = AutoModelForCausalLM.from_pretrained(model_dir, quantization_config=nf4_config, low_cpu_mem_usage=True)
        self.tokenizer = AutoTokenizer.from_pretrained(tokenizer_dir)
        self.device = device
        pass
    def generate_text(self, disease_pred, desc):
        message = [
            {
                "role": "system",
                "content": """You are a medical chatbot who suggests treatment plan for skin disease. Give the output in this format:


                Treatment Plan:
                1) ... 
                2) ...
                ... ( Maximum 5 )


                If you are not sure then ask for more clarification of the symptopms.
                The disease is most likely """ +  disease_pred + "."
            },
            {
                "role": "user",
                "content": desc
            }
        ]


    
        prompt = self.tokenizer.apply_chat_template(message, tokenizer=True, add_generation_prompt=True, return_tensors="pt")

        output = self.model.generate(prompt, max_new_tokens=512, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)

        ret_val = self.tokenizer.decode(output[0], skip_special_tokens=True)

        return ret_val


# # model and toknizer file path
# model_dir = 'models/text'
# tokenizer_dir = 'models/tokenizer'

# # instantiate text model class
# TEXT_MODEL = TextModel(model_dir, tokenizer_dir)


# predicted_class, confidence = 'acne', 92.21    
# prompt = "The symptoms that I have are  small bumps, red and tender lesions, and painful, inflamed lumps beneath the skin that lead to scarring. "



# output = TEXT_MODEL.generate_text(predicted_class, prompt)
# print(output)