# Youtube Music Subtitler

A subtitle generator and translator powered by the OpenAI API.

Transcribes songs from audio and translates from english to brazilian portuguese, while trying to maintain same vibe and rhythm as the original. 
To use it, it's as simple as providing the url for the youtube video of the music and press start. This will generate the translated audio transcription text formatted like a SubRip(srt) file, ready to use as a subtitle.

It has a web UI built in TypeScript with Next.js, and the requests to the API and most of the heavy lifting is done in Python.



## Ingredients

- Python and pip
  - [pysrt](https://github.com/byroot/pysrt) - Python parser for subrip (srt files)
  - [yt-dlp](https://github.com/yt-dlp/yt-dlp) - A youtube-dl fork with additional features and fixes
  - [openai](https://github.com/openai/openai-python) - The OpenAI Python Library provides easy access to the OpenAI API
- [Next.js](https://github.com/vercel/next.js)
- [Radix UI](https://www.radix-ui.com) - Unstyled, accessible components for building high-quality design systems and web apps in React
- [Stitches](https://github.com/stitchesjs/stitches) - CSS-in-JS Library
## How to use

1. Get an OpenAI API Key [here](https://platform.openai.com/account/api-keys)
2. Create a .env file based on the .env.example file, and add your API Key
3. Run the following commands

```bash
pip install -r requirements.txt
npm i
npm run dev
```

4. App is running on [localhost](http://localhost:3000)


#### Credits

This project is heavily inspired on craftdogz