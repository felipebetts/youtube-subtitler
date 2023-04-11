import os
from dotenv import load_dotenv
import openai
import sys

load_dotenv()
openai.api_key = os.getenv('OPENAI_API_KEY')
video_id = sys.argv[1]
audio_file_path = os.path.join(os.getcwd(), 'tmp', video_id + '.m4a')

audio_file = open(audio_file_path, 'rb')
transcript = openai.Audio.transcribe(
    file=audio_file,
    model='whisper-1',
    response_format='srt',
    prompt='I am the Regional Manager for a Paper Company Called Dunder Mifflin. My name is Michael Scott. I am not supersticious.'
)
print(transcript)
