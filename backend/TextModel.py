from transformers import AutoModelForCausalLM, AutoTokenizer

# the text model class
class TextModel():
    def __init__(self, model_dir, tokenizer_dir):
        self.model = AutoModelForCausalLM.from_pretrained(model_dir)
        self.tokenizer = AutoTokenizer.from_pretrained(tokenizer_dir)
    
    def generate_text(self, disease_pred, desc):
        message = [
            {
                "role": "system",
                "content": "You are a medical chatbot. You take in the "
            },
            {
                "role": "user",
                "content": desc
            }
        ]

        prompt = self.tokenizer.apply_chat_template(message, tokenizer=True, add_generation_prompt=True, return_tensors="pt")

        output = self.model.generate(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)

        ret_val = self.tokenizer.decode(output[0], skip_special_tokens=True)

        return ret_val

# model and toknizer file path
model_dir = 'backend/models/text'
tokenizer_dir = 'backend/models/tokenizer'

tokenizer = AutoTokenizer.from_pretrained("TinyLlama/TinyLlama-1.1B-Chat-v1.0")
model = AutoModelForCausalLM.from_pretrained("TinyLlama/TinyLlama-1.1B-Chat-v1.0")

tokenizer.save_pretrained(tokenizer_dir)
model.save_pretrained(model_dir)