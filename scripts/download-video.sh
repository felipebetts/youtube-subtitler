#!/bin/bash

VIDEO_ID=$1

[ -z "$VIDEO_ID" ] && echo "Error: No video id specified" && exit 1

yt-dlp "https://www.youtube.com/watch?v=$VIDEO_ID" --format mp4 -o "./tmp/%(id)s.%(ext)s" 2>&1