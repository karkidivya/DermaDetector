#  backenc/TextModel.py
from transformers import AutoModelForCausalLM, AutoTokenizer

# the text model class
class TextModel():
    def __init__(self, model_dir, tokenizer_dir):
        # self.model = AutoModelForCausalLM.from_pretrained(model_dir)
        # self.tokenizer = AutoTokenizer.from_pretrained(tokenizer_dir)
    
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

        disease_to_treatment_map = {
            "eczema": "Your symptoms match those of eczema, also known as dry skin. Eczema is a common skin condition that causes dry, itchy, and inflamed skin. The treatment plan for eczema typically includes the following steps:\n\n1. Identify the cause: The first step in treating eczema is to identify the cause of the condition. This can be done through a consultation with a dermatologist or dermatological specialist.\n\n2. Mild to moderate cases: For mild to moderate cases, you may need to use gentle, non-drying soaps, lotions, and moisturizers. \n\n3. Severe cases: For severe cases, you may need to use a more potent formulation of ointment, cream, or lotion. These products are designed to soothe and moisturize the skin.\n\n4. Stress management: Stress can worsen eczema symptoms.",
            "nevus": "Treatment plan:\n- If your symptoms are change in shape, color, rapid increase in size, itching, and pain, then you can try the following treatments:\n  - Avoid sun exposure: Wear protective clothing and use sunscreen with a high SPF to protect your skin from the sun's UV rays.\n  - Hydrate: Drink plenty of water to keep your skin hydrated and prevent dehydration.\n  - Use gentle soap: Use a mild soap to wash your skin gently, avoid using harsh chemicals that can irritate your skin.\n  - Use an emollient: Apply an emollient (such as oil or cream) to your skin to keep it soft and moisturized.\n\n2",
            "acne": "Sure, here is a suggested treatment plan for acne:\n\n1) Suggestion 1:\n- Use gentle, non-comedogenic cleansers with aloe vera to remove impurities from your skin.\n- Use a lightweight moisturizer to hydrate and soothe the skin.\n- Use a non-comedogenic foundation and concealer to blend out any blemishes.\n- Use a retinoid or retinol cream to help reduce inflammation and improve skin texture.\n- Consult with a dermatologist to determine the appropriate treatment plan for your acne."
        }

        return disease_to_treatment_map[disease_pred]
    
        # prompt = self.tokenizer.apply_chat_template(message, tokenizer=True, add_generation_prompt=True, return_tensors="pt")

        # output = self.model.generate(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)

        # ret_val = self.tokenizer.decode(output[0], skip_special_tokens=True)

        # return ret_val
