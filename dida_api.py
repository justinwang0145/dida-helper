import openai
import os

# from dotenv import load_dotenv, find_dotenv
# _ = load_dotenv(find_dotenv())

openai.api_key  = os.getenv('OPENAI_API_KEY')
print(os.getenv('OPENAI_API_KEY'))

def get_completion(prompt, model="gpt-3.5-turbo"):
    response = openai.Completion.create(
        engine=model,
        prompt=prompt,
        temperature=0,  # This is the degree of randomness of the model's output
        max_tokens=100,  # Adjust the desired length of the completion
    )
    return response.choices[0].text.strip()

text = f"""
You should express what you want a model to do by \ 
providing instructions that are as clear and \ 
specific as you can possibly make them. \ 
This will guide the model towards the desired output, \ 
and reduce the chances of receiving irrelevant \ 
or incorrect responses. Don't confuse writing a \ 
clear prompt with writing a short prompt. \ 
In many cases, longer prompts provide more clarity \ 
and context for the model, which can lead to \ 
more detailed and relevant outputs.
"""
prompt = f"""
Summarize the text delimited by triple backticks \ 
into a single sentence.
```{text}```
"""
response = get_completion(prompt)
print(response)