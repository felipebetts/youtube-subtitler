import os
import sys
from dotenv import load_dotenv
import openai
import pysrt

load_dotenv()
openai.api_key = os.getenv('OPENAI_API_KEY')
input_data = sys.stdin.read()
subs = pysrt.from_string(input_data)

prompt_base = (
    'You are going to be a good translator. '
    'Here is a part of the transcript of my vlog. '
    'I am the Regional Manager for a Paper Company Called Dunder Mifflin. My name is Michael Scott. I am known to believe I am funny but not everyone agrees with me.'
    'Translate the following text precisely into Spanish'
    # 'with the andalucian casual style'
    'Translate from [START] to [END]:\n[START]'
)


def translate_text(text):
    prompt = prompt_base
    prompt += text + '\n[END]'
    res = openai.Completion.create(
        model='text-davinci-003',
        prompt=prompt,
        max_tokens=300,
        temperature=0
    )
    # print(res)
    # print(res.choices)
    # print(res.choices[0].text)
    return res.choices[0].text.strip()


for index, subtitle in enumerate(subs):
    subtitle.text = translate_text(subtitle.text)
    print(index, subtitle.text)
    print(subtitle)
